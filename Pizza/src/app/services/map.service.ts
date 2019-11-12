import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import UserModel from '../models/UserModel'
import { environment } from 'src/environments/environment.prod';
import AddressModel from '../models/AddressModel';


@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  getUsers(): Promise<UserModel[]> {
    const url = `${environment.pizzaStoreApiBaseUrl}/api/managers/users/`;
    return this.http.get<UserModel[]>(url).toPromise().then();
  }

  getAdresses(id: number): Promise<AddressModel[]> {
    const url = `${environment.pizzaStoreApiBaseUrl}/api/drivers/${id}/orders/`;
    return this.http.get<AddressModel[]>(url).toPromise().then();
  }

}
