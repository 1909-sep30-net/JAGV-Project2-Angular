import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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

  constructor(
    public dialogRef: MatDialogRef<Dialog>,
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}