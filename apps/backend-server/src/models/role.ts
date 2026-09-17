import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema<Model.Role>(
  {
    type: {
      type: Number,
      required: true,
      unique: true,
      enum: [1, 2, 3],
    },

    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      enum: ['admin', 'maintainer', 'common'],
    },
  },
  {
    collection: 'roles',
  },
);

const Role = mongoose.model('Role', roleSchema);

export default Role;
