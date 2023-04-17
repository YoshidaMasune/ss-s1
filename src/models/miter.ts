import { model, Schema } from 'mongoose';

export const Miter = model(
  'miter',
  new Schema(
    {
      LOCATION: {
        type: Schema.Types.ObjectId,
        required: true,
      },

      MITER: [
        {
          _NUMBER: Number,
          timeEdit: Date,
        },
      ],
    },
    { timestamps: true },
  ),
);
