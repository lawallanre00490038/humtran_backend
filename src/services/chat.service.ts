import prisma  from '../lib/prismaClient';


const findOrCreateChatSession = async (userId: string, otherUserId: string) => {
  if (!userId || !otherUserId) {
    throw new Error('Both userId and otherUserId must be provided.');
  }

  // Check for existing session
  const sessions = await prisma.chatSession.findMany({
    include: { participants: true },
    where: {
      participants: {
        some: { userId },
      },
    },
  });

  const foundSession = sessions.find(session =>
    session.participants.some(p => p.userId === otherUserId)
  );

  if (foundSession) {
    return foundSession;
  }

  // Create new session
  const session = await prisma.chatSession.create({
    data: {
      participants: {
        create: [
          { userId },
          { userId: otherUserId },
        ],
      },
    },
    include: { participants: true },
  });

  return session;
};



const getMessagesBySession = async (sessionId: string) => {
  return prisma.message.findMany({
    orderBy: { createdAt: 'asc' },
    where: { sessionId },
  });
};

export { findOrCreateChatSession, getMessagesBySession };
