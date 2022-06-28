import { addNewIngredient, existsIngredient } from '../models/ingredients.models.js';

const ingredients = [
    {
        title: 'Tomato',
    },
    {
        title: 'Cheese',
    },
    {
        title: 'Flour',
    },
    {
        title: 'Olive Oil',
    },
];

export async function seedIngredients() {
    ingredients.forEach(async (i) => {
        const existing = await existsIngredient(i);
        if (!existing[0]) {
            await addNewIngredient(i);
        }
        return;
    });
}
