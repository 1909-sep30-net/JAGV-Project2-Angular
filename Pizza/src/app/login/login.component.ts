import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import LoginModel from '../models/LoginModel';
import { LoginService } from '../services/login.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router"
import UserModel from '../models/UserModel';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  hide: any;
  user: UserModel;

  constructor(public dialog: MatDialog,
    private api: LoginService, 
    private formBuilder: FormBuilder,
    private router: Router) {}

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

  async OnLogin()
  {
    

    await this.api.login({UserName : this.loginForm.get("name").value, Password: this.loginForm.get("password").value})
    .then(response => {console.log("found!",response), this.user = response}  ).catch(error => {console.log("ERROR!!! -> ", error)});

    if(this.user.userType.name == "Customer")
    {
      this.router.navigate(['/order', this.user.id])
    }
    else if (this.user.userType.name == "Driver")
    {
      this.router.navigate(['/map'])
    }

    
    this.dialog.closeAll();
  }

  ngOnInit() {

  }

}
