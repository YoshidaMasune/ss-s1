import { Request, Response } from 'express';
import { Mitor } from '../models/mitor';
import { Room } from '../models/room';
import { Suwan } from '../models/suwan';
import { Customer } from '../models/customer';

export const MitorControll = () => {
  /**
   * CREATE
   * @param req
   * @param res
   */
  const createHandle = (req: Request, res: Response) => {
    const mitor = req.body.mitor;
    const room = req.body.room;
    const customer = req.body.customer || undefined;

    const mitorDoc = new Mitor();
    const roomDoc = new Room();
    const suwanDoc = new Suwan();
    const customerDoc = new Customer();

    try {
      mitorDoc.MITOR.push(mitor);

      /**
       * INSERT ROOM
       */
      roomDoc.MITOR = mitorDoc._id;
      roomDoc.ROOM = room.ROOM;
      roomDoc.FOOR = room.FOOR;
      roomDoc.SECTION = room.SECTION;

      suwanDoc.ROOM = roomDoc._id;

      /**
       * this condition for not have customer from body
       */
      if (customer !== undefined) {
        /**
         * INSERT CUSTOMER
         */

        customerDoc.FIRST_NAME = customer.FIRST_NAME;
        customerDoc.LAST_NAME = customer.LAST_NAME;
        customerDoc.CHAJA! = customer.CHAJA;
        customerDoc.PHONE! = customer.PHONE;
        customerDoc.INTERNET! = customer.INTERNET;

        suwanDoc.CUSTOMER = customerDoc._id;

        // save customer
        customerDoc.save().catch((err) => {
          res.status(500).json({
            mgs: err,
            status: 500,
          });
        });
      }

      /**
       * save docs with Promise
       */
      Promise.all([mitorDoc.save(), roomDoc.save(), suwanDoc.save()])
        .then((result) => {
          /**
           * response for OK
           */
          res.status(200).json({
            msg: 'insert successfull',
            status: 200,
          });
        })
        .catch((err) => {
          /**
           * response for ERROR
           */
          res.status(500).json({
            mgs: err,
            status: 500,
          });
        });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };

  /**
   *
   * @param req
   * @param res
   */
  const read = async (req: Request, res: Response) => {
    try {
      const result = await Room.find();

      const section_1 = result.filter((room) => room.SECTION === 1);
      const section_2 = result.filter((room) => room.SECTION === 2);

      res.status(200).json(section_1);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: error,
        status: 500,
      });
    }
  };

  return {
    createHandle,
    read,
  };
};
