import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import router from './routes';
dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials: true
}))

app.use('/api/v1', router);

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})