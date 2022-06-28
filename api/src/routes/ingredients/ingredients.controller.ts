import {
    Ingredient,
    listAllIngredients,
    addNewIngredient,
    existsIngredient,
} from '../../models/ingredients.models.js';
import { ErrorMessage } from '../types.js';
import { Request, Response } from 'express';

export async function httpListAlIngredients(req: Request, res: Response) {
    return res.status(200).json(await listAllIngredients());
}

export async function httpExistsIngredient(req: Request, res: Response) {
    const ingredient: Ingredient = req.body;
    const existingIngredient = existsIngredient(ingredient);

    if (existingIngredient) {
        return res.status(200).json(existingIngredient);
    }
    return res.status(404).json(ErrorMessage.notFound);
}

export async function httpAddNewIngredient(req: Request, res: Response) {
    const ingredient: Ingredient = req.body;
    const existingIngredient = existsIngredient(ingredient);

    if (existingIngredient) {
        return res.status(403).json(ErrorMessage.alreadyExists);
    }
    return res.status(200).json(await addNewIngredient(ingredient));
}