import { Request, Response, Router } from 'express';

const router = Router();
import { userRouter } from './user';

router.get('/', (req: Request, res: Response) => {
  res.json('Welcome to FinX!');
});

router.use('/', userRouter);

export default router;
