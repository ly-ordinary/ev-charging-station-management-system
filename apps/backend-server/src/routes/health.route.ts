import { Router } from 'express';

const healthRouter = Router();

healthRouter.get('/', (_req, res) => {
  res.status(200).json({
    code: 1,
    success: true,
    data: 'health passed! Server is running.',
    msg: 'success',
  });
});

export default healthRouter;
