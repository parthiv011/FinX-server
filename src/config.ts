import dotenv from 'dotenv';
dotenv.config();

export const secret = process.env.SECRET || 'secret_key';
