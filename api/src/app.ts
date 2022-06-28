import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import morgan from 'morgan';
import cors from 'cors';

export const app: Express = express();

import { api } from './routes/api.js';

const PORT = process.env.PORT || 8000;

app.use(
    cors({
        origin: `http://localhost:${PORT}`,
    }),
);
app.use(morgan('short'));

app.use(express.json());

app.use('/v1', api);
