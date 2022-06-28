export type Ingredient = {
    id: number;
    title: string;
};

const ingredients: Array<Ingredient> = [
    {
        id: 0,
        title: 'Tomato',
    },
    {
        id: 1,
        title: 'Cheese',
    },
    {
        id: 2,
        title: 'Flour',
    },
    {
        id: 3,
        title: 'Olive Oil',
    },
];

export async function listAllIngredients() {
    return ingredients;
}

export async function addNewIngredient(ingredient: Ingredient) {
    ingredients.push({
        id: ingredients.length,
        title: ingredient.title,
    });

    return ingredients[ingredients.length - 1];
}

export async function existsIngredient(ingredient: Ingredient) {
    const found: Ingredient = ingredients.find((o) => o.title === ingredient.title);
    if (found) {
        return found;
    }
    return {};
}
