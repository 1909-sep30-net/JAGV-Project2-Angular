import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {LoginService} from '../services/login.service';
import AddressModel from '../models/AddressModel';
import UserTypeModel from '../models/UserTypeModel';
import UserModel from '../models/UserModel';


import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  userForm;
  hide: any;

  address: AddressModel;
  userType: UserTypeModel;
  user: UserModel;

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<CreateComponent>,
    private formBuilder: FormBuilder,
    private api: LoginService
    ) {
      this.userForm = this.formBuilder.group({
        name: new FormControl('', Validators.required),
          password: new FormControl('', Validators.required),
          zip: new FormControl('', [Validators.required, Validators.minLength(5)]),
          city: new FormControl('', Validators.required),
          street: new FormControl('', Validators.required),
          state: new FormControl('', Validators.required),
          userType: new FormControl('1')
      });
    }

    states: string[] = [
      'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
      'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
      'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
      'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
      'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
      'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
      'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];

    

  ngOnInit() {

  }

  OnSubmit()
  {

    console.log(this.userForm.get("street").value)
    
    //this.address.id = 0;
    this.address =
    {
      id : 0,
      street : this.userForm.get("street").value,
      city : this.userForm.get(`city`).value,
      state : this.userForm.get(`state`).value,
      zipCode : this.userForm.get(`zip`).value

    }

    //this.userType.id = 0;
    this.userType = 
    {
      id : 0,
      name : this.userForm.get(`userType`).value,
    } 

    this.user = 
    {
      id: 0,
      name: this.userForm.get(`name`).value,
      password: this.userForm.get(`password`).value,
      UserType: this.userType,
      Address: this.address
    }

    this.api.createUser(this.user)
    .then(res => console.log("created?"))
    .catch(function (error) {console.error("Something went wrong :(.... -> ", error)});
    
   
  }



}
