import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';

import { api } from './routes/api';

export const app: Express = express();

const PORT = process.env.PORT || 8000;

app.use(
    cors({
        origin: `http://localhost:${PORT}`,
    }),
);
app.use(morgan('short'));

app.use(express.json());

app.use('/v1', api);
