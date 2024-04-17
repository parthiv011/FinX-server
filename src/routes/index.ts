import { Request, Response, Router } from "express";

const router = Router();
const userRouter = require('./user');

router.get('/', (req: Request, res: Response) => {
    res.json('Welcome to FinX!')
})

router.use('/', userRouter);

export default router;