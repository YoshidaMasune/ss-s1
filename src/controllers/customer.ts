import { Request, Response } from 'express';
import { ControllerModel } from './utils/create';
import { Suwan } from '../models/suwan';
import { Customer } from '../models/customer';

const Customer_Controll = ControllerModel(Customer);
const Suwan_Controll = ControllerModel(Suwan);

export const createRecord = async (req: Request, res: Response) => {
  const customerSet = req.body.customer;
  const locationSet = req.body.location;

  const test = await Customer_Controll.newDoc({
    ...customerSet,
  });

  test.save();
  try {
  } catch (error) {
    console.log(error);
  }
};
