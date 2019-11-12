import IngredientTypeModel from './IngredientTypeModel';

export default interface IngredientModel
{
    id: number,
    typeId: number,
    name: string,
    price: number,
    ingredientType: IngredientTypeModel
}