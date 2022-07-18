import {
    listAllIngredients,
    addNewIngredient,
    existsIngredient,
    existsIngredientById,
    deleteIngredientById,
} from '../../db/models/ingredients.models';
import { ErrorMessage } from '../types';
import { Request, Response } from 'express';

export async function httpListAlIngredients(req: Request, res: Response) {
    return res.status(200).json(await listAllIngredients());
}

export async function httpExistsIngredient(req: Request, res: Response) {
    const ingredient = req.body;
    const existingIngredient = await existsIngredient(ingredient);

    if (existingIngredient[0]) {
        return res.status(200).json(existingIngredient);
    }
    return res.status(404).json(ErrorMessage.notFound);
}

export async function httpAddNewIngredient(req: Request, res: Response) {
    const ingredient = req.body;
    const existingIngredient = await existsIngredient(ingredient);

    if (existingIngredient[0]) {
        return res.status(403).json(ErrorMessage.alreadyExists);
    }
    return res.status(201).json(await addNewIngredient(ingredient));
}

export async function httpDeleteIngredientById(req: Request, res: Response) {
    const ingredientId = req.params._id;
    const existingIngredient = await existsIngredientById(ingredientId);

    if (existingIngredient) {
        await deleteIngredientById(ingredientId);
        return res.status(200).json();
    }
    return res.status(404).json(ErrorMessage.notFound);
}
