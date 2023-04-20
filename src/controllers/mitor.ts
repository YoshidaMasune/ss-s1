import { Request, Response, NextFunction } from 'express';
import { Mitor } from '../models/mitor';

export const mitorController = () => {
  /**
   *
   * @param req
   * @param res
   */
  const create = async (req: Request, res: Response) => {
    try {
      const mitor = req.body.mitor || {};
      if (mitor === null) {
        res.status(400).send('have no mitor in body request');
      } else {
        const mitorDoc = new Mitor();

        mitorDoc.MITOR.push({
          NUM: mitor.num,
          TIME_EDIT: new Date(mitor.TIME_EDIT),
        });
        const result = mitorDoc.save();
        res.status(200).json(result);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }

    const fillDateAndMitor = () => {};
  };

  /**
   *
   * @param req
   * @param res
   */
  const readMany = async (req: Request, res: Response) => {};
  /**
   *
   * @param req
   * @param res
   */
  const readById = async (req: Request, res: Response) => {};
  /**
   *
   * @param req
   * @param res
   */
  const updateById = async (req: Request, res: Response) => {};
  /**
   *
   * @param req
   * @param res
   */
  const deleteById = async (req: Request, res: Response) => {};
  /**
   *
   * @param req
   * @param res
   */
  const deleteAll = async (req: Request, res: Response) => {};
  /**
   *
   * @param req
   * @param res
   */

  return {
    readMany,
    readById,
    create,
    updateById,
    deleteById,
    deleteAll,
  };
};
