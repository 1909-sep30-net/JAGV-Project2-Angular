import PizzaIngredientModel from './PizzaIngredientModel';

export default interface PizzaModel {
    id: number,
    orderId: number,
    name: string,
    pizzaingredients: PizzaIngredientModel[]
}