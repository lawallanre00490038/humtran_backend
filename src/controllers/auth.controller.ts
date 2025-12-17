import { Role } from '@prisma/client';
import { SecurityAgent as SecurityAgentType } from '@prisma/client';
import { Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';

import { ApiResponsePayload, LoginPayload, RegisterPayload } from '@/types/auth.types';
import { comparePasswords, generateToken, hashPassword, verifyToken } from '@/utils/auth';
import { otpMailer } from '@/utils/otp';

import prisma from '../lib/prismaClient';




export const register = async (
  req: Request<unknown, unknown, RegisterPayload>,
  res: Response<ApiResponsePayload>
) => {
  const { email, name, password, phone, role } = req.body;

  if (!email && !phone) {
    return res.status(400).json({
      error: "Invalid credentials",
      message: "Email or phone is required",
    });
  }

  const existingUser = await prisma.user.findFirst({
    where: { OR: [{ email }, { phone }] },
  });

  if (existingUser) {
    return res.status(400).json({
      error: 'USER_EXIST',
      message: 'User with email or phone already exists',
    });
  }

  const hashed = await hashPassword(password);

  const user = await prisma.user.create({
    data: { email: email, isOnline: true, name: name,  password: hashed, phone: phone, role: role as Role },
  });

  let securityAgent = null;
  if (role === Role.SECURITY) {
    securityAgent = await prisma.securityAgent.create({
      data: { lat: 0, lng: 0, name: name,  status: 'ON_LINE', userId: user.id },
    });

    console.log("The created security agent is", securityAgent)
  }

  const tokenPayload = {
    agentId: securityAgent?.id ?? '',
    email: user.email ?? '',
    id: user.id,
    name: user.name,
    role: user.role,
  };

  const token = generateToken(tokenPayload);

  res.cookie('token', token, {
    httpOnly: true,
    maxAge: 2 * 60 * 60 * 1000,
  });


  try {
    const contact = user.email ?? user.phone ?? '';
    
    if (contact) {
      try {
        await otpMailer(email ?? "")
      } catch (err) {
        console.error("Warning: Failed to send OTP after successful registration:", err);
      }
      

      const userWithAgent = {
        ...user,
        ...(securityAgent  && {
          securityId: securityAgent .id,
          securityLastUpdated: securityAgent .lastUpdated,
          securityLat: securityAgent .lat,
          securityLng: securityAgent .lng,
          securityStatus: securityAgent .status,
        }),
      };

      res.json({
        message: 'Registration successful. OTP sent',
        token,
        user: userWithAgent,
      });
  
    }

  } catch (err) {
    console.error("Failed to send OTP:", err);
  }
};



// export const login = async (
//   req: Request<unknown, unknown, LoginPayload>,
//   res: Response<ApiResponsePayload>
// ) => {
//   const { identifier, password } = req.body;

//   const user = await prisma.user.findFirst({
//     where: {
//       OR: [{ email: identifier }, { phone: identifier }],
//     },
//   });

//   if (!user || !(await comparePasswords(password, user.password))) {
//     return res.status(400).json({
//       error: 'INVALID_CREDENTIALS',
//       message: 'Invalid email/phone or password',
//     });
//   }

//   // Fetch agent IF user is SECURITY
//   let agent: null | SecurityAgentType = null;

//   if (user.role === Role.SECURITY) {
//     agent = await prisma.securityAgent.findUnique({
//       select: {
//         id: true,
//         lastUpdated: true,
//         lat: true,
//         lng: true,
//         name: true,
//         role: true,
//         status: true,
//         userId: true,
//       },
//       where: { userId: user.id },
//     });
//   }

//   // Merge agent info into user
//   const userWithAgent = {
//     ...user,
//     ...(agent && {
//       securityId: agent.id,
//       securityLastUpdated: agent.lastUpdated,
//       securityLat: agent.lat,
//       securityLng: agent.lng,
//       securityStatus: agent.status,
//     }),
//   };

//   const tokenPayload = {
//     agentId: agent?.id ?? "",
//     email: user.email ?? '',
//     id: user.id,
//     name: user.name,
//     role: user.role,
//   };

//   const token = generateToken(tokenPayload);

//   res.cookie('token', token, {
//     httpOnly: true,
//     maxAge: 2 * 24 * 60 * 60 * 1000,
//   });

//   res.json({
//     message: 'Login successful',
//     token,
//     user: userWithAgent, // user object now has agent info
//      // optional if you still want full agent object
//   });
// };

export const login = async (
  req: Request<unknown, unknown, LoginPayload>,
  res: Response<ApiResponsePayload>
) => {
  const { identifier, password } = req.body;

  // 1. Find user by email or phone
  const user = await prisma.user.findFirst({
    where: {
      OR: [{ email: identifier }, { phone: identifier }],
    },
  });

  // 2. User does not exist
  if (!user) {
    return res.status(404).json({
      error: 'USER_NOT_FOUND',
      message: 'User does not exist',
    });
  }

  // 3. Password is incorrect
  const isPasswordValid = await comparePasswords(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      error: 'INVALID_PASSWORD',
      message: 'Incorrect password',
    });
  }

  // 4. Fetch agent IF user is SECURITY
  let agent: null  | SecurityAgentType = null;

  if (user.role === Role.SECURITY) {
    agent = await prisma.securityAgent.findUnique({
      select: {
        id: true,
        lastUpdated: true,
        lat: true,
        lng: true,
        name: true,
        role: true,
        status: true,
        userId: true,
      },
      where: { userId: user.id },
    });
  }

  // 5. Merge agent info into user
  const userWithAgent = {
    ...user,
    ...(agent && {
      securityId: agent.id,
      securityLastUpdated: agent.lastUpdated,
      securityLat: agent.lat,
      securityLng: agent.lng,
      securityStatus: agent.status,
    }),
  };

  // 6. Token payload
  const tokenPayload = {
    agentId: agent?.id ?? '',
    email: user.email ?? '',
    id: user.id,
    name: user.name,
    role: user.role,
  };

  const token = generateToken(tokenPayload);

  // 7. Set cookie
  res.cookie('token', token, {
    httpOnly: true,
    maxAge: 2 * 24 * 60 * 60 * 1000,
  });

  // 8. Success response
  return res.status(200).json({
    message: 'Login successful',
    token,
    user: userWithAgent,
  });
};




export const getCurrentUser = async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  const tokenFromHeader = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
  const token = tokenFromHeader ?? (req.cookies.token as string);

  if (!token) { 
    return res.status(401).json({ error: 'Token is missing' });
  }

  try {
    const decoded = verifyToken(token);

    if (typeof decoded === 'string' || !('id' in decoded)) {
      return res.status(401).json({ error: 'Invalid token payload' });
    }

    const user = await prisma.user.findUnique({
      where: { id: (decoded as JwtPayload).id as string },
    });

    if (!user) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    let agent: null  | SecurityAgentType = null;
    if (decoded.role === 'SECURITY') {
      agent = await prisma.securityAgent.findUnique({
        select: {
          id: true,
          lastUpdated: true,
          lat: true,
          lng: true,
          name: true,
          role: true,
          status: true,
          userId: true,
        },
        where: { userId: decoded.id },
      });
    }

    // Merge agent info into user
  const userWithAgent = {
    ...user,
    ...(agent && {
      securityId: agent.id,
      securityLastUpdated: agent.lastUpdated,
      securityLat: agent.lat,
      securityLng: agent.lng,
      securityStatus: agent.status,
    }),
  };

    res.json({
      message: 'Information Fetched successfully',
      token,
      user: userWithAgent
    });

  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: 'Invalid token' });
  }
};




// Delete a user and ALL associated data
export const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await prisma.$transaction(async (tx) => {
      /**  Delete emergencies CREATED by the user */
      await tx.emergencyRequest.deleteMany({
        where: { userId },
      });

      /* If user is a SECURITY agent, clean agent-related data */
      if (user.role === Role.SECURITY) {
        // Find agent
        const agent = await tx.securityAgent.findUnique({
          where: { userId },
        });

        if (agent) {
          // Delete emergencies ASSIGNED to this agent
          await tx.emergencyRequest.deleteMany({
            where: { securityId: agent.id },
          });

          // Delete agent record
          await tx.securityAgent.delete({
            where: { id: agent.id },
          });
        }
      }

      /**  Delete chat-related data */
      const sessions = await tx.chatSession.findMany({
        select: { id: true },
        where: {
          participants: {
            some: { userId },
          },
        },
        
      });

      const sessionIds = sessions.map(s => s.id);

      if (sessionIds.length > 0) {
        // Messages
        await tx.message.deleteMany({
          where: { sessionId: { in: sessionIds } },
        });

        // Participants
        await tx.chatParticipant.deleteMany({
          where: { sessionId: { in: sessionIds } },
        });

        // Sessions
        await tx.chatSession.deleteMany({
          where: { id: { in: sessionIds } },
        });
      }

      /**  Finally delete the user */
      await tx.user.delete({
        where: { id: userId },
      });
    });

    return res.json({
      message: "User and all associated data deleted successfully",
      userId,
    });

  } catch (error) {
    console.error("Failed to delete user:", error);
    return res.status(500).json({
      error: "Failed to delete user",
    });
  }
};




export const updateUserRole = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const role = (req.body as { role?: unknown }).role;

    // Validate role
    if (typeof role !== "string" || !Object.values(Role).includes(role as Role)) {
      return res.status(400).json({
        error: "Invalid role",
        message: `Role must be one of: ${Object.values(Role).join(", ")}`,
      });
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    // Update user role
    const updatedUser = await prisma.user.update({
      data: { role: role as Role },
      where: { id: userId },
      
    });

    // Handle securityAgent creation/removal
    if (role === Role.SECURITY) {
      // ensure agent record exists
      await prisma.securityAgent.upsert({
        create: {
          lat: 0,
          lng: 0,
          name: updatedUser.name,
          status: "ON_LINE",
          userId,
        },
        update: {},
        where: { userId },
      });
    } else {
      // remove agent if role changed away from SECURITY
      await prisma.securityAgent.deleteMany({
        where: { userId },
      });
    }
    return res.json({
      data: updatedUser,
      message: "User role updated successfully",
    });
  } catch (error) {
    console.error("Failed to update role:", error);
    return res.status(500).json({
      error: "Failed to update role",
    });
  }
};



export const getUserRoles =  (_req: Request, res: Response) => {
  try {
    const roles = Object.values(Role);

    return res.json({
      message: "User roles fetched successfully",
      roles,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Unable to fetch user roles" });
  }
};





export const getAllUsers = async (req: Request, res: Response) => {
  try {
    
    const role = req.user.role;

    if (role !== Role.ADMIN) {
      return res.status(403).json({ error: "Only admin can access this resource" });
    }

    const users = await prisma.user.findMany({
      include: {
        securityAgent: true, // optional
      },
    });

    return res.json({
      data: users,
      message: "Users fetched successfully",
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ error: "Failed to fetch users" });
  }
};
