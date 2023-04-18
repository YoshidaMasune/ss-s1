import { NextFunction, Request, Response } from 'express';
import { Room } from '../models/room';

export const hasRoomRecorded = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const room = req.body.room;
  try {
    const checkRoomRequest = await Room.find({ ...room });

    if (checkRoomRequest.length === 0) {
      next();
    } else {
      res.status(400).json({
        msg: 'room had recorded',
        status: 400,
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
