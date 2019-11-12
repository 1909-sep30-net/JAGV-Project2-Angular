import IngredientModel from './IngredientModel';

export default interface PizzaIngredientModel
{
    id: 0,
    pizzaId: 0,
    ingredientId: number,
    ingredient: IngredientModel
}