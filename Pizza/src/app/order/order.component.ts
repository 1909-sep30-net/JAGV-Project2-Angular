import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormBuilder, FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderForm: any;

  crustList: string[] = [
    'thin',
    'pan',
    'hand tossed'
  ]
  cheeseList: string[] = [
    'Mozzarella',
    'Triple cheese',
    'Vegan Cheese',
    'No Cheese 😑'
  ]
  meatList: string[] = [
    'Pepperoni',
    'Ham',
    'Sausage'
  ]
  vegetableList: string[] = [
    'Mushroom',
    'Spinach',
    'Pineapple',
    'Green Peppers',
    'black olives',
    'red onions'
  ]

  crust: any;
  cheeses: any;
  meats: any;
  vegetables: any

  constructor(public dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {
    this.orderForm = this.formBuilder.group({
      crust: new FormControl(Validators.required),
      cheeses: new FormControl([Validators.required]),
      meats: new FormControl([Validators.required]),
      vegetables: new FormControl([Validators.required])
    });
  }

  ngOnInit() {

    
  }
  OnSubmit()
  {

  }

}
