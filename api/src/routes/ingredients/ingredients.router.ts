import express, { Router } from 'express';
import {
    httpListAlIngredients,
    httpAddNewIngredient,
    httpDeleteIngredientById,
} from './ingredients.controller';

export const ingredientsRouter: Router = express.Router();

ingredientsRouter.get('/', httpListAlIngredients);
ingredientsRouter.post('/', httpAddNewIngredient);
ingredientsRouter.delete('/:_id', httpDeleteIngredientById);
