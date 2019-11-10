import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderForm: any;

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<CreateComponent>,
    private formBuilder: FormBuilder
    ) {
      this.orderForm = this.formBuilder.group({
        crust: new FormControl('', Validators.required),
          cheeses: this.formBuilder.array([this.])
          meats: new FormControl('', Validators.required),
          vegtables: new FormControl('', Validators.required)
      });
    }

  ngOnInit() {
  }

}
