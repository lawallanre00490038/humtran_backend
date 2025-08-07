import { Request, Response } from 'express';

import { findOrCreateChatSession, getMessagesBySession } from '../services/chat.service';

export const startOrGetSession = async (req: Request, res: Response) => {
  try {
    const { otherUserId } = req.body as { otherUserId: string };
    const userId = (req as { user: { id: string } }).user.id;

    console.log("This is the user id and other user id ", userId, otherUserId);

    if (!userId || !otherUserId) {
      return res.status(400).json({ message: 'Missing userId or otherUserId', success: false });
    }

    const session = await findOrCreateChatSession(userId, otherUserId);
    res.status(200).json({ session, success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error', success: false });
  }
};


export const getSessionMessages = async (req: Request, res: Response) => {
  try {
    const sessionId = req.params.sessionId;
    const messages = await getMessagesBySession(sessionId);
    res.status(200).json({ messages, success: true });
  } catch {
    res.status(500).json({ message: 'Server Error', success: false });
  }
};
