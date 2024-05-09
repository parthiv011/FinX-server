import { Request, Response, Router } from 'express';
import {
  changePassword,
  forgetPassword,
  getMyProfile,
  loginUser,
  RegisterUser,
  updateUser,
} from '../controllers/user';
import authMiddleware from '../middlewares/auth';

export const userRouter = Router();

userRouter.get('/me', (req: Request, res: Response) => {
  res.json('User routes Works!');
});

userRouter.post('/login', loginUser);
userRouter.post('/register', RegisterUser);
userRouter.put('/me', updateUser);
userRouter.get('/me', getMyProfile);
userRouter.put('changepassword', authMiddleware, changePassword);
userRouter.put('forgetpassword/:token', authMiddleware, forgetPassword);
