import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormBuilder, FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { CreateComponent } from '../create/create.component';
import { analyzeAndValidateNgModules } from '@angular/compiler';

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


  crust = this.formBuilder.group(
    {
      userCrust: new FormControl(Validators.required)
    }
  );
  cheeses = this.formBuilder.group(
    {
      userCheeses: new FormControl([Validators.required])
    }
  )
  meats = this.formBuilder.group(
    {
      userMeats: new FormControl([Validators.required])
    }
  )
  vegetables = this.formBuilder.group(
    {
      userVegetables: new FormControl([Validators.required])
    }
  )

  selector: boolean = false;
  cheeseSelector: boolean = false;
  meatSelector: boolean = false;
  vegetableSelector: boolean = false;

  get cheeseToppings(): string[] { return this.cheeses.get("userCheeses").value as string[] }
  get meatToppings() : string[] { return this.meats.get("userMeats").value as string[]}
  get vegetableToppings() : string[] { return this.vegetables.get("userVegetables").value as string[]}


  total: number;
  
  constructor(public dialog: MatDialog,
    private formBuilder: FormBuilder,) 
    {

      this.total= 0.00
    }
  


  openDetail()
  {
    this.dialog.open(OrderComponent, {
      panelClass : "detailsDialog"
    });
  }

  disableCheeseSelect()
  {
    if(this.cheeseSelector)
    {
      this.cheeseSelector = false;
    }
    else
    this.cheeseSelector = true;
  }

  disableMeatSelect()
  {
    if(this.meatSelector)
    {
      this.meatSelector = false;
    }
    else
    this.meatSelector = true;
  }

  disableVegetableSelect()
  {
    if(this.vegetableSelector)
    {
      this.vegetableSelector = false;
    }
    else
    this.vegetableSelector = true;
  }


  checkList()
  {
    console.log(this.cheeses.value);
  }

  ngOnInit() {

    
  }
  OnSubmit()
  {

  }

}
