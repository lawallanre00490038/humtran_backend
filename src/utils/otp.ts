import prisma from "@/lib/prismaClient";

import { MailUtil } from "./mailer";

const mailer = new MailUtil(process.env.RESEND_API_KEY ?? "", "noreply@genaigov.ai");

export const otpMailer = async (
  identifier: string
  // res: Response<ApiResponsePayload>
) => {

  if (!identifier) throw new Error("An identifier is needed");;

  const user = await prisma.user.findFirst({
    where: { OR: [{ email: identifier }, { phone: identifier }] }
  });

  if (!user) throw new Error("User not found");
  if (user.isVerified) throw new Error("User already verified");

  const otp = generateOtp();

  await prisma.user.update({
    data: { otpCode: otp, otpExpiresAt: otpExpiry() },
    where: { id: user.id },
  });

  if (user.email) {
    try {
      await mailer.sendMail({
        subject: "Your OTP Code from HumGuard",
        to: user.email,
        token: otp,
      });
      
    } catch (err) {
      console.error("Failed to send OTP email:", err);
    }
  }

  if (process.env.NODE_ENV !== "production") {
    console.log(`OTP for ${identifier}: ${otp}`);
  }
};


export const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit
};

export const otpExpiry = () => {
  return new Date(Date.now() + 5 * 60 * 1000); // 5 minutes
};









