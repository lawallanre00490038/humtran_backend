import { EmergencyStatus } from '@prisma/client';
import { Request, Response } from 'express';

import { EMERGENCY_TYPES } from '@/constants/emergencyTypes';
import {io} from "@/server"
import { findNearestAgent } from '@/utils/geo';

import prisma from '../lib/prismaClient';



// export const requestHelp = async (req: Request, res: Response) => {
//   const { location, type } = req.body as { location?: { lat: number; lng: number }; type?: string };

//   if (!location) {
//     return res.status(400).json({ message: "Missing location in request body. Please include location" });
//   }

//   if (!type) {
//     return res.status(400).json({ message: "Missing  type in request body. Please include type" });
//   }

//   const userId = req.user.id;

//   console.log(userId, "This is the UserID\n\n")
  



//   // Step 1: Delete all previous chat sessions involving this user
//   const existingSessions = await prisma.chatSession.findMany({
//     include: { participants: true },
//     where: {
//       participants: {
//         some: { userId },
//       },
//     },
//   });

//   const sessionIds = existingSessions.map((session: typeof existingSessions[number])=> session.id);

//   if (sessionIds.length > 0) {
//     // Delete all messages related to these sessions (if applicable)
//     await prisma.message.deleteMany({
//       where: {
//         sessionId: { in: sessionIds },
//       },
//     });

//     // Delete all participants first
//     await prisma.chatParticipant.deleteMany({
//       where: {
//         sessionId: { in: sessionIds },
//       },
//     });

//     // Delete the sessions themselves
//     await prisma.chatSession.deleteMany({
//       where: {
//         id: { in: sessionIds },
//       },
//     });
//   }




//   const emergency = await prisma.emergencyRequest.create({
//     data: {
//       lat: location.lat,
//       lng: location.lng,
//       status: EmergencyStatus.PENDING,
//       type,
//       userId,
//     },
//   });

//   const agents = await prisma.securityAgent.findMany();
//   console.log("All the agents: ", agents)
//   const agentsWithLocation = agents.map(agent=> ({
//     ...agent,
//     agentUserId: agent.userId,
//     location: { lat: agent.lat, lng: agent.lng }
//   }));

//   console.log("Agent with location: ", agentsWithLocation)

//   const nearest = findNearestAgent(location, agentsWithLocation);

//   if (nearest) {
//     const updatedEmergency = await prisma.emergencyRequest.update({
//       data: { securityId: nearest.id, status: EmergencyStatus.ASSIGNED },
//       where: { id: emergency.id },
//     });

//     // Emit socket event to specific agent room (agentId)
//     io.to(nearest.agentUserId).emit('new-emergency', { emergency: updatedEmergency });

//     return res.status(200).json({
//       emergency: updatedEmergency,
//       message: 'Emergency created and agent assigned',
//       nearestAgent: nearest
//     });
//   }

//   return res.status(200).json({
//     emergency,
//     message: 'Emergency created but no agent found',
//   });
// };



export const requestHelp = async (req: Request, res: Response) => {
  const { location, type } = req.body as { location?: { lat: number; lng: number }; type?: string };

  if (!location || !type) {
    return res.status(400).json({ message: 'Missing location or type in request body.' });
  }

  const userId = req.user.id;

  try {
    // Step 1: Create emergency request
    const emergency = await prisma.emergencyRequest.create({
      data: {
        lat: location.lat,
        lng: location.lng,
        status: EmergencyStatus.PENDING,
        type,
        userId,
      },
      include: {
        assignedTo: {
          select: {
            id: true,
            lat: true,
            lng: true,
            name: true,
            status: true,
            user: {
              select: {
                email: true,
                id: true,
                name: true      // agent name
              }
            }
          },
        },
        user: {
          select: { email: true, id: true, name: true },
        },
      },
    });

    // Step 2: Fetch all available agents
    const agents = await prisma.securityAgent.findMany();
    const agentsWithLocation = agents.map(agent => ({
      ...agent,
      agentUserId: agent.userId,
      location: { lat: agent.lat, lng: agent.lng },
    }));

    // Step 3: Find nearest agent
    const nearest = findNearestAgent(location, agentsWithLocation);

    if (nearest) {
      const updatedEmergency = await prisma.emergencyRequest.update({
        data: { securityId: nearest.id, status: EmergencyStatus.ASSIGNED },
        include: {
          assignedTo: {
            select: {
              id: true,
              lat: true,
              lng: true,
              name: true,
              status: true,
              user: {
                select: {
                  email: true,
                  id: true,
                  name: true      // agent name
                }
              }
            }
          },
          user: { select: { email: true, id: true, name: true } },
        },
        where: { id: emergency.id },
      });

      // Notify agent via socket
      io.to(nearest.agentUserId).emit('new-emergency', { emergency: updatedEmergency });

      return res.status(200).json({
        emergency: updatedEmergency,
        message: 'Emergency created and agent assigned',
      });
    }

    return res.status(200).json({
      emergency,
      message: 'Emergency created but no agent found',
    });
  } catch (error) {
    console.error('Error creating emergency:', error);
    return res.status(500).json({ error, message: 'Server error' });
  }
};


export const assignAgent = async (req: Request, res: Response) => {
  const { agentId, emergencyId } = req.body as { agentId: string; emergencyId: string };

  const assigned = await prisma.emergencyRequest.update({
    data: {
      securityId: agentId,
      status: EmergencyStatus.ASSIGNED,
    },
    where: { id: emergencyId },
    
  });

  res.json(assigned);
};

export const getEmergencyTypes = (_req: Request, res: Response) => {
  return res.status(200).json({ types: EMERGENCY_TYPES });
};


// Fetch emergencies for current user or agent
export const getUserEmergencies = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const role = req.user.role;

  try {
    let emergencies;

    if (role === 'USER') {
      emergencies = await prisma.emergencyRequest.findMany({
        include: {
          assignedTo: { select: { id: true, lat: true, lng: true, name: true, status: true } },
          user: { select: { email: true, id: true,  name: true } },
         
        },
        orderBy: { createdAt: 'desc' },
        where: { userId },
      });
    } else if (role === 'SECURITY') {
      emergencies = await prisma.emergencyRequest.findMany({
        include: {
          assignedTo: { select: { id: true, lat: true, lng: true, name: true,  status: true } },
          user: { select: { email: true, id: true,  name: true } },
          
        },
        orderBy: { createdAt: 'desc' },
        where: { assignedTo: { userId } },
      });
    } else if (role === 'ADMIN') {
      emergencies = await prisma.emergencyRequest.findMany({
        include: {
          assignedTo: { select: { id: true,  lat: true, lng: true, name: true,status: true } },
          user: { select: { email: true, id: true,  name: true } },
        },
        orderBy: { createdAt: 'desc' },
      });
    }

    return res.status(200).json({ emergencies });
  } catch (error) {
    console.error('Error fetching emergencies:', error);
    return res.status(500).json({error, message: 'Server error' });
  }
};


export const getAgentEmergencies = async (req: Request, res: Response) => {
  const { agentId } = req.params;

  try {
    const emergencies = await prisma.emergencyRequest.findMany({
      include: {
        assignedTo: {
          select: {
            id: true,
            lat: true,
            lng: true,
            name: true,
            status: true,
            user: {
              select: {
                email: true,
                id: true,
                name: true,
                
              }
            }
          }
        },
        user: {
          select: {
            email: true,
            id: true,
            name: true,
          },
        },
        
      },
      orderBy: { createdAt: 'desc' },
      where: { securityId: agentId },
    });

    return res.status(200).json({
      emergencies,
      message: 'Emergencies fetched successfully',
    });
  } catch (error) {
    console.error('Error fetching agent emergencies:', error);
    return res.status(500).json({
      error,
      message: 'Server error',
    });
  }
};



export const getEmergencyStatus = async (req: Request, res: Response) => {
  const { emergencyId } = req.params;

  try {
    const emergency = await prisma.emergencyRequest.findUnique({
      include: {
        assignedTo: { select: { id: true, name: true , userId: true } },
        user: { select: { email: true , id: true, name: true, } },
      },
      where: { id: emergencyId },
    });

    if (!emergency) {
      return res.status(404).json({ message: 'Emergency not found' });
    }


    return res.status(200).json({
      assignedTo: emergency.assignedTo,
      createdAt: emergency.createdAt,
      emergencyId: emergency.id,
      status: emergency.status,
      type: emergency.type,
      user: emergency.user,
    });
  } catch (error) {
    console.error('Error fetching emergency status:', error);
    return res.status(500).json({ error, message: 'Server error' });
  }
};


export const updateEmergencyStatus = async (req: Request, res: Response) => {
  const { status } = req.body as { status: EmergencyStatus };
  const { emergencyId } = req.params;

  const allowedStatuses = [
    EmergencyStatus.ASSIGNED,
    EmergencyStatus.EN_ROUTE,
    EmergencyStatus.ARRIVED,
    EmergencyStatus.COMPLETED,
    EmergencyStatus.PENDING,
  ];

  if (!allowedStatuses.includes(status)) {
    return res.status(400).json({
      message: `Invalid status. Allowed values: ${allowedStatuses.join(', ')}`
    });
  }

  try {
    // Fetch emergency + check permissions
    const emergency = await prisma.emergencyRequest.findUnique({
      include: {
        assignedTo: { select: { id: true, userId: true } }
      },
      where: { id: emergencyId },
      
    });

    if (!emergency) {
      return res.status(404).json({ message: 'Emergency not found' });
    }

    // Update status
    const updated = await prisma.emergencyRequest.update({
      data: { status },
      include: {
        assignedTo: {
          select: {
            id: true,
            lat: true,
            lng: true,
            name: true,
            status: true,
            user: { select: { email: true, id: true, name: true,  } }
          }
        },
        user: { select: { email: true, id: true, name: true,  } },
        
      },
      where: { id: emergencyId },
    });

    // Emit socket event if needed
    io.to(updated.user.id).emit('emergency-status-updated', updated);

    return res.status(200).json({
      emergency: updated,
      message: `Emergency updated to ${status}`,
    });

  } catch (error) {
    console.error('Error updating emergency status:', error);
    return res.status(500).json({ error, message: 'Server error',  });
  }
};


export const getAllEmergencies = async (req: Request, res: Response) => {
  const role = req.user.role;
  const userId = req.user.id;
   // USER or SECURITY

  try {
    let emergencies;

    if (role === "USER") {
      // User: get emergencies they requested
      emergencies = await prisma.emergencyRequest.findMany({
        orderBy: { createdAt: "desc" },
        where: { userId },
        
      });

    } else if (role === "SECURITY") {
      // Agent: get emergencies assigned to them
      emergencies = await prisma.emergencyRequest.findMany({
        orderBy: { createdAt: "desc" },
        where: { securityId: userId },
        
      });

    } else if (role === "ADMIN") {
      // Agent: get emergencies assigned to them
      emergencies = await prisma.emergencyRequest.findMany({
        orderBy: { createdAt: "desc" },
        // where: { securityId: userId },
        
      });
    }

    return res.status(200).json({
      emergencies,
      message: "Emergencies fetched successfully",
      
    });

  } catch (error) {
    console.error("Error fetching emergencies:", error);
    return res.status(500).json({
      error,
      message: "Server error",
      
    });
  }
};

export const deleteEmergency = async (req: Request, res: Response) => {
  try {
    const { emergencyId } = req.params;
    const userId = req.user.id;
    const role = req.user.role;

    // Fetch the emergency first, including assigned agent
    const emergency = await prisma.emergencyRequest.findUnique({
      include: {
        assignedTo: {
          select: { userId: true }, // fetch assigned agent's userId
        },
      },
      where: { id: emergencyId },
      
    });

    if (!emergency) {
      return res.status(404).json({ error: "Emergency not found" });
    }

    // Check if user is allowed to delete
    const isAdmin = role === 'ADMIN';
    const isCreator = emergency.userId === userId;
    const isAssignedAgent = emergency.assignedTo?.userId === userId;

    if (!isAdmin && !isCreator && !isAssignedAgent) {
      return res.status(403).json({
        error: "You cannot delete this emergency",
      });
    }

    // Delete emergency
    await prisma.emergencyRequest.delete({
      where: { id: emergencyId },
    });

    return res.json({
      emergencyId,
      message: "Emergency deleted successfully",
    });
  } catch (error) {
    console.error("Failed to delete emergency:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
