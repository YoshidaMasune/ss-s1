import { model, Schema } from 'mongoose';

export const Location = model(
  'location',
  new Schema(
    {
      CUSTOMER: {
        type: Schema.Types.ObjectId,
        ref: 'customer',
      },

      ROOM: {
        type: Number,
        required: true,
      },

      FOOR: {
        type: Number,
        required: true,
      },

      SECTION: {
        type: Number,
        required: true,
      },
    },
    { timestamps: true },
  ),
);
