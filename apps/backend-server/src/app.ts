import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { connectMongoDb, logger } from './config';
import { requestLogger } from './middlewares';
import router from './routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(requestLogger);
app.use('/api', router);

const PORT = process.env.PORT || 6663;

const startServer = async (): Promise<void> => {
  await connectMongoDb();

  app.listen(PORT, () => {
    logger.info('Ev Charging Station Management System Express Server is Running');
    logger.info(`The Server running at http://localhost:${PORT}`);
  });
};

startServer();
