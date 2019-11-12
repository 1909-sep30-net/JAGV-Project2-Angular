import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import {LoginService} from '../services/login.service';
import UserModel from '../models/UserModel';
import LoginModel from '../models/LoginModel';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(public dialog: MatDialog) {}

  

  openDialog(): void {
    const dialogRef = this.dialog.open(Dialog, {
      panelClass :'bg'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'home-dialog',
  templateUrl: 'home-dialog.html'
})
export class Dialog {

  usersList: UserModel[] = null;
  
  login: LoginModel = null;

  user: UserModel = null;

  

  constructor(
    public dialogRef: MatDialogRef<Dialog>,
    public dialog: MatDialog,
    
    ) {}


  onLogin()
  {
    this.dialog.open(LoginComponent, {
      panelClass:'bg'
    })
  }

  onCreate()
  {
    this.dialog.open(CreateComponent, {
      panelClass :'bg'
    });
  }

}