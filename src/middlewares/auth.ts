import jwt, { JwtPayload } from 'jsonwebtoken';
import { secret } from '../config';
import { NextFunction, Request, Response } from 'express';
import prisma from '../db';
import { User } from '@prisma/client';

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      msg: 'No token provided!',
    });
  }

  try {
    const decoded = jwt.verify(token, secret) as JwtPayload;
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });
    if (!user) {
      return res.status(401).json({
        msg: 'User not found',
      });
    }
    req.user = user as User;
    next();
  } catch (e) {
    return res.status(401).json({
      msg: 'Invalid token',
    });
  }
};

export default authMiddleware;
