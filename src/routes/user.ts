import { Request, Response, Router } from 'express';

const router = Router();

router.get('/user', (req: Request, res: Response) => {
    res.json("User routes Works!")
});

module.exports = router;