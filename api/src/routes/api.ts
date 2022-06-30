import express, { Router } from 'express';

import { ingredientsRouter } from './ingredients/ingredients.router';

export const api: Router = express.Router();

api.use('/ingredients', ingredientsRouter);
