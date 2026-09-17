import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

import { connectMongoDb, logger } from '../config';
import Role from '../models/role';
import User from '../models/user';

dotenv.config();

const seedAdminUser = async () => {
  await connectMongoDb();

  const adminRole = await Role.findOne({ name: 'admin' });

  if (!adminRole) {
    throw new Error('Admin role not found');
  }

  const password = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'admin', 10);

  await User.create({
    name: 'Administrator',
    username: 'admin',
    role_id: adminRole._id,
    password,
  });

  logger.info('Admin user seeded successfully');

  process.exit(0);
};

seedAdminUser();
