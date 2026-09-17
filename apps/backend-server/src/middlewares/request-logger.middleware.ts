import { Request, Response, NextFunction } from 'express';
import { logger } from '../config';

export default function requestLogger(req: Request, res: Response, next: NextFunction) {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;

    logger.info(`${req.method} ${res.statusCode} ${req.originalUrl} ${duration}ms`);
  });

  next();
}
