import dotenv from 'dotenv';
import mongoose from 'mongoose';
import logger from './logger';

dotenv.config();

const connectMongoDb = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
      throw new Error('MONGODB_URI is not defined');
    }

    await mongoose.connect(mongoUri);

    logger.info('MongoDB connected successfully!');
  } catch (error) {
    logger.error(error, 'MongoDB connection failed:');
    process.exit(1);
  }
};

export default connectMongoDb;
