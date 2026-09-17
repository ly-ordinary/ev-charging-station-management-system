import bcrypt from 'bcrypt';

import User from '../models/user';

export const login = async ({ username, password }: Auth.LoginInput) => {
  const user = await User.findOne({ username }).populate('role_id');

  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }

  return user;
};
