import { Request, Response, Router } from 'express';

export const userRouter = Router();

userRouter.get('/user', (req: Request, res: Response) => {
    res.json("User routes Works!")
});
