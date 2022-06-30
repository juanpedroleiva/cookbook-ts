import { Ingredient, IIngredient } from './ingredients.mongo';

export async function listAllIngredients() {
    const ingredients = await Ingredient.find({});
    return ingredients;
}

export async function addNewIngredient(ingredient: IIngredient) {
    const created = await Ingredient.create({
        title: ingredient.title,
    });

    return created;
}

export async function existsIngredient(ingredient: IIngredient) {
    const found = Ingredient.find({ title: ingredient.title });
    if (found) {
        return found;
    }
    return {};
}
