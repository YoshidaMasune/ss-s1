import { Request, Response, NextFunction } from 'express';
import { Mitor } from '../models/mitor';
import { Room } from '../models/room';

export const validMitor = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let MID = req.params.MID || {};
    const RID = req.params.RID || {};

    /**
     * search MID when this middleware use for '/mitor-mitor' endpoint
     */
    if (MID === null) {
      const searchRoomForMitor = await Room.findOne({ _id: RID }).populate(
        'MITOR',
      );

      console.log(searchRoomForMitor);
      if (searchRoomForMitor === null) {
        res.status(400).send('bad rerquest');
      } else {
        MID = searchRoomForMitor.MITOR._id;
      }
    } else {
      const findObject = { _id: MID };
      const valMitor = await Mitor.findOne(findObject); // return for check

      if (valMitor === null) {
        res.status(404).send(`not found mitor record`);
      } else {
        /**
         *
         * month fill
         */
        const oldMitorRecord = valMitor.MITOR[valMitor.MITOR.length - 1]; // return { NUM:number, TIME_EDIT: Date }

        // return number of month
        const oldMonth = new Date(oldMitorRecord.TIME_EDIT).getMonth();
        const currentMonth = new Date(req.body.mitor.TIME_EDIT).getMonth();

        console;

        /**
         *
         *
         * mitor fill
         */
        const oldNumMitor = oldMitorRecord.NUM; // return number
        const currentMitor = req.body.mitor.NUM; // return number

        /**
         *
         * oldMonth in database more then > currentMonth form client
         */
        if (oldMonth >= currentMonth) {
          /**
           *
           *
           * respones fails
           */
          res.status(400).send('date time is mistake at less then oldMonth');
        } else {
          /**
           *
           * dubble check mitor
           */
          if (oldNumMitor > currentMitor) {
            res.status(400).send('bad mitor');
          } else {
            console.log('test good');
            next();
          }
        }
      }
    }
    // find Mitor
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
