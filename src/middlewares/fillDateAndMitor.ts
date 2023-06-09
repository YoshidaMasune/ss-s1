import { NextFunction, Request, Response } from 'express';
import { Room } from '../models/room';
import { Mitor } from '../models/mitor';
export const fillDateAndMitor = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  /**
   *
   */
  try {
    const oldRecord = await Room.findOne({ _id: req.params.RID }).populate(
      'MITOR',
    );

    /**
     *
     *
     */
    if (oldRecord === null) {
      res.status(404).send(`not found record`);
    } else {

    /**
     *
     *
     */
      const mitorRecord = await Mitor.findOne({ _id: oldRecord.MITOR._id });

      if (mitorRecord === null) {
        res.status(404).send(`not found mitor record`);
      } else {
        /**
         *
         *
         * month fill
         */
        const oldMitorRecord = mitorRecord.MITOR[mitorRecord.MITOR.length - 1]; // return { NUM:number, TIME_EDIT: Date }

        // return number of month
        const oldMonth = new Date(oldMitorRecord.TIME_EDIT).getMonth();
        const currentMonth = new Date(req.body.mitor.TIME_EDIT).getMonth();

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
            next();
          }
        }
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
