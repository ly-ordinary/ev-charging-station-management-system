import mongoose from 'mongoose';

const userSchema = new mongoose.Schema<Model.User>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    role_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role',
      required: true,
    },

    phone: {
      type: String,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'users',
    timestamps: {
      createdAt: 'created_time',
      updatedAt: 'updated_time',
    },
  },
);

const UserModel = mongoose.model<Model.User>('User', userSchema);

export default UserModel;
