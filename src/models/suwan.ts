import mongoose, { Schema } from 'mongoose';

export const Suwan = mongoose.model(
  'suwan',
  new mongoose.Schema(
    {
      CUSTOMER: {
        type: mongoose.Schema.Types.ObjectId,
      },

      LOCATION: {
        type: mongoose.Schema.Types.ObjectId,
      },

      MITER: {
        type: Schema.Types.ObjectId,
        ref: 'mitor',
      },
    },
    { timestamps: true },
  ),
);
