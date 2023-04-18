import { Request, Response } from 'express';
import { Mitor } from '../models/mitor';
import { Room } from '../models/room';
import { Suwan } from '../models/suwan';
import { Customer } from '../models/customer';
import { model } from 'mongoose';

export const MitorControll = () => {
  const createHandle = (req: Request, res: Response) => {
    const mitor = req.body.mitor;
    const room = req.body.room;
    const customer = req.body.custormer || undefined;

    const mitorDoc = new Mitor();
    const roomDoc = new Room();
    const suwanDoc = new Suwan();
    const customerDoc = new Customer();

    try {
      mitorDoc.MITOR.push(mitor);

      roomDoc.MITOR = mitorDoc._id;
      roomDoc.ROOM = room.ROOM;
      roomDoc.FOOR = room.FOOR;
      roomDoc.SECTION = room.SECTION;

      customerDoc.FIRST_NAME = customer.FIRST_NAME;
      customerDoc.LAST_NAME = customer.LAST_NAME;
      customerDoc.CHAJA = customer.CHAJA;
      customerDoc.PHONE = customer.PHONE;

      suwanDoc.ROOM = roomDoc._id;
      if (customer !== undefined) {
        suwanDoc.CUSTOMER = customerDoc._id;
      }

      const result = Promise.all([
        mitorDoc.save(),
        roomDoc.save(),
        suwanDoc.save(),
        customerDoc.save(),
      ]);

      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };

  return {
    createHandle,
  };
};
