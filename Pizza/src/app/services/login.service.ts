import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import UserModel from '../models/UserModel'
import { environment } from 'src/environments/environment.prod';
import LoginModel from '../models/LoginModel';
import OrderModel from '../models/OrderModel';
import IngredientModel from '../models/IngredientModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }   

   createUser(user: UserModel): Promise<UserModel> {
     const url = `${environment.pizzaStoreApiBaseUrl}/api/users/`;
     return this.httpClient.post<UserModel>(url,user).toPromise().then();
   }

   getUsers(): Promise<UserModel[]> {
     const url = `${environment.pizzaStoreApiBaseUrl}/api/users/all/`;
     return this.httpClient.get<UserModel[]>(url).toPromise().then();
   }

   login(login: LoginModel): Promise<UserModel> {
     //let name = new HttpParams().set('UserName',login.UserName);
     //let params = name.append('UserPassword',login.Password);

     const url = `${environment.pizzaStoreApiBaseUrl}/api/users/login/`+ login.UserName;
     return this.httpClient.get<UserModel>(url).toPromise().then();
   }

   CreateOrder(order: OrderModel): Promise<OrderModel> {
     
    const url = `${environment.pizzaStoreApiBaseUrl}/api/users/orders/place-order/`;
    return this.httpClient.post<OrderModel>(url,order).toPromise().then();
   }

   getIngredients(): Promise<IngredientModel[]> {
    const url = `${environment.pizzaStoreApiBaseUrl}/api/users/ingredients/`;
    return this.httpClient.get<IngredientModel[]>(url).toPromise();
   }

}
