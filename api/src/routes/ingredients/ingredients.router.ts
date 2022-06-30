import express, { Router } from 'express';
import { httpListAlIngredients, httpAddNewIngredient } from './ingredients.controller';

export const ingredientsRouter: Router = express.Router();

ingredientsRouter.get('/', httpListAlIngredients);
ingredientsRouter.post('/', httpAddNewIngredient);
