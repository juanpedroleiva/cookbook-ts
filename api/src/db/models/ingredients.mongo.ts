import mongoose from 'mongoose';

export interface IIngredient {
    title: string;
}

const ingredientSchema = new mongoose.Schema<IIngredient>(
    {
        title: { type: String, required: true },
    },
    { versionKey: false },
);

export const Ingredient = mongoose.model<IIngredient>('Ingredient', ingredientSchema);
