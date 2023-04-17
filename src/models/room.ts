import { model, Schema } from 'mongoose';

export const Room = model(
  'room',
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

      MITOR: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'mitor',
      },
    },
    { timestamps: true },
  ),
);
