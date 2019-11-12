import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import UserModel from '../models/UserModel';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient) { }

  getUsers(): Promise<UserModel[]> {
    const url = `${environment.pizzaStoreApiBaseUrl}/api/managers/users/`;
    return this.http.get<UserModel[]>(url).toPromise().then();
  }

  getDrivers(): Promise<UserModel[]> {
    const url = `${environment.pizzaStoreApiBaseUrl}/api/managers/drivers/`;
    return this.http.get<UserModel[]>(url).toPromise().then();
  }
}
