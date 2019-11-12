import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import LoginModel from '../models/LoginModel';
import { LoginService } from '../services/login.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  hide: any;
  constructor(public dialog: MatDialog,
    private api: LoginService, private formBuilder: FormBuilder) {}

  login: LoginModel ;

  loginForm = this.formBuilder.group ({
    name : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  OnLogin()
  {
    

    const user = this.api.login({UserName : this.loginForm.get("name").value, Password: this.loginForm.get("password").value})
    .then(response => {console.log("FOUND!!!! => \n",response)}  ).catch(error => {console.log("ERROR!!! -> ", error)});
  }

  ngOnInit() {

  }

}
