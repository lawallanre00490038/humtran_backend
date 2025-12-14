import { Request, Response } from 'express';

import { ApiResponsePayload } from '@/types/auth.types';
import { generateOtp, otpExpiry, otpMailer } from '@/utils/otp';

import prisma from '../lib/prismaClient';


interface ResendOtpPayload {
  identifier: string; // email or phone
}

interface VerifyOtpPayload {
  identifier: string; // email or phone
  otp: string;
}



export const resendOtp = async (
  req: Request<unknown, unknown, ResendOtpPayload>, 
  res: Response<ApiResponsePayload>
) => {
  const { identifier } = req.body;
  const lowerIdentifier = identifier.toLowerCase(); // Ensure email check is case-insensitive

  if (!identifier) {
    return res.status(400).json({ 
      error: "Invalid input", 
      message: "Email identifier is required." 
    });
  }

  try {
    const user = await prisma.user.findFirst({
      where: { 
        OR: [
          { email: lowerIdentifier }, 
          // { phone: identifier } // Phone numbers are typically case-sensitive/exact match
        ] 
      }
    });

    if (!user) {
      // Return a generic error to prevent user enumeration
      return res.status(404).json({ 
        error: "User not found", 
        message: "The provided identifier does not match any user." 
      });
    }

    if (user.isVerified) {
      return res.status(400).json({ 
        error: "Already verified", 
        message: "This user is already verified." 
      });
    }

    const otp = generateOtp();

    // 1. Update OTP in the database
    await prisma.user.update({
      data: {
        otpCode: otp,
        otpExpiresAt: otpExpiry(),
      },
      where: { id: user.id },
      
    });

    // 2. Send the OTP using the available contact method (email takes precedence)
    const contactMethod = user.email;

    try {
      await otpMailer(contactMethod ?? "");
      if (process.env.NODE_ENV !== 'production') {
        console.log(`[DEV ONLY] Resent OTP to ${contactMethod ?? ""}:`, otp);
      }
    } catch (sendError) {
      console.error(`Failed to send OTP to ${contactMethod ?? ""}:`, sendError);
      // Fail gracefully, but inform the user that delivery failed.
      return res.status(500).json({
        error: "OTP delivery failed",
        message: "We could not send the OTP. Please check the identifier or try again later."
      });
    }

    return res.json({ 
      error: 'NULL',
      message: "OTP resent successfully. Please check your mail" 
    });

  } catch (error) {
    console.error("Critical error during OTP resend:", error);
    res.status(500).json({ 
      error: 'Server error', 
      message: 'An unexpected error occurred while processing the request.' 
    });
  }
};




export const verifyOtp = async (
  req: Request<unknown, unknown, VerifyOtpPayload>, 
  res: Response<ApiResponsePayload>
) => {
  const { identifier, otp } = req.body;
  const lowerIdentifier = identifier.toLowerCase(); // Ensure email check is case-insensitive

  if (!identifier || !otp) {
    return res.status(400).json({ 
      error: "Invalid input", 
      message: "Identifier and OTP are required." 
    });
  }
  
  try {
    // 1. Find the user
    const user = await prisma.user.findFirst({
      where: { 
        OR: [
          { email: lowerIdentifier }, 
          // { phone: identifier }
        ] 
      }
    });

    if (!user) {
      return res.status(404).json({ 
        error: "User not found", 
        message: "The provided identifier does not match any user." 
      });
    }

    if (user.isVerified) {
      return res.status(400).json({ 
        error: "Already verified", 
        message: "This user is already verified." 
      });
    }

    // 2. Check for OTP state
    if (!user.otpCode || !user.otpExpiresAt) {
      // Avoid giving specific reasons if OTP wasn't sent, just use a generic failure for security
      return res.status(400).json({ 
        error: "Invalid OTP", 
        message: "Invalid OTP or session expired. Please request a new code." 
      });
    }

    // 3. Check for Expiration
    if (new Date() > user.otpExpiresAt) {
      // Set OTP to null after expiration for security/cleanup
      await prisma.user.update({
        data: { otpCode: null, otpExpiresAt: null },
        where: { id: user.id },
        
      });
      return res.status(400).json({ 
        error: "OTP expired", 
        message: "The OTP has expired. Please request a new code." 
      });
    }

    // 4. Check for Match
    if (user.otpCode !== otp) {
      return res.status(400).json({ 
        error: "Invalid OTP", 
        message: "The provided OTP is incorrect." 
      });
    }

    // 5. Success: Verify user and clear OTP fields
    const UpdatedUser = await prisma.user.update({
      data: {
        isVerified: true,
        otpCode: null,
        otpExpiresAt: null,
      },
      where: { id: user.id },
      
    });

    return res.json({ 
      agent: null,
      message: 'Registration successful. OTP sent',
      token: "",
      user: UpdatedUser,
    });

  } catch (error) {
    console.error("Critical error during OTP verification:", error);
    res.status(500).json({ 
      error: 'Server error', 
      message: 'An unexpected error occurred while verifying the OTP.' 
    });
  }
};









