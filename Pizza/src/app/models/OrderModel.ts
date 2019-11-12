import PizzaModel from './PizzaModel';

export default interface OrderModel
{
    id: number,
    userId: number,
    delivererId: number,
    delivered: boolean,
    pizzas: PizzaModel[]
}