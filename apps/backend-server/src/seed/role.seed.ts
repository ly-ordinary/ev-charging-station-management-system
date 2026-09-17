import mongoose from 'mongoose';

import { connectMongoDb } from '../config';
import Role from '../models/role';

const roles = [
  { type: 1, name: 'admin' },
  { type: 2, name: 'maintainer' },
  { type: 3, name: 'common' },
];

const seedRoles = async () => {
  await connectMongoDb();

  await Role.deleteMany();
  await Role.insertMany(roles);

  console.log('Roles seeded successfully');

  await mongoose.disconnect();
};

seedRoles();
