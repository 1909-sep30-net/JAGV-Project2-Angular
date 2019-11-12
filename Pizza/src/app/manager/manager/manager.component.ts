import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';
import UserModel from 'src/app/models/UserModel';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  usersList: UserModel[] = [];
  driverList: UserModel[] = [];
  users = [];

  constructor(private api: ManagerService) { }

  ngOnInit() {
  }


  loadUsers() {
    this.api.getUsers().then(users => {
      this.usersList = users;
      for (let i = 0; i < users.length; i++) {
        this.users.push({
          name: `${this.usersList[i].name} ${this.usersList[i].password}`,
          value: `${this.usersList[i].address.street} ${this.usersList[i].address.city}, ${this.usersList[i].address.state} ${this.usersList[i].address.zipCode}`
        });
      }
    });

  }

  loadDrivers() {
    this.api.getDrivers().then(drivers => {
      this.driverList = drivers;
      for (let i = 0; i < drivers.length; i++) {
        this.users.push({
          name: `${this.driverList[i].name} ${this.driverList[i].password}`,
          value: `${this.driverList[i].address.street} ${this.driverList[i].address.city}, ${this.driverList[i].address.state} ${this.driverList[i].address.zipCode}`
        });
      }
    });

  }

}
