import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';

import { api } from './routes/api';

export const app: Express = express();

const API_VER = process.env.API_VER || 'v1';
const PORT = process.env.PORT || 8000;

app.use(
    cors({
        origin: `http://localhost:${PORT}`,
    }),
);

if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('short'));
}

app.use(express.json());

app.use(`/${API_VER}`, api);
