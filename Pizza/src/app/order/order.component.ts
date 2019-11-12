import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormBuilder, FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { CreateComponent } from '../create/create.component';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import OrderModel from '../models/OrderModel';
import IngredientModel from '../models/IngredientModel';
import IngredientTypeModel from '../models/IngredientTypeModel';
import PizzaModel from '../models/PizzaModel';
import PizzaIngredientModel from '../models/PizzaIngredientModel';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderForm: any;

  order: OrderModel;
  //ingredient: IngredientModel;
  ingredients: IngredientModel[] = [];
  ingredientType: IngredientTypeModel;
  pizza: PizzaModel;
  tempPizza: PizzaIngredientModel;
  pizzaIngredients: PizzaIngredientModel[] = [];


  // crustList: string[] = [
  //   'thin',
  //   'pan',
  //   'hand tossed'
  // ]
  // cheeseList: string[] = [
  //   'Mozzarella',
  //   'Triple cheese',
  //   'Vegan Cheese',
  // ]
  // meatList: string[] = [
  //   'Pepperoni',
  //   'Ham',
  //   'Sausage'
  // ]
  // vegetableList: string[] = [
  //   'Mushroom',
  //   'Spinach',
  //   'Pineapple',
  //   'Green Peppers',
  //   'black olives',
  //   'red onions'
  // ]

  crustList: IngredientModel[] = [];
  sauceList: IngredientModel[] = [];
  cheeseList: IngredientModel[] = [];
  meatList: IngredientModel[] = [];
  vegetableList: IngredientModel[] = [];

  orderList: IngredientModel[] = [];


  crust = this.formBuilder.group(
    {
      userCrust: new FormControl(Validators.required)
    }
  );
  sauce = this.formBuilder.group(
    {
      userSauce: new FormControl([Validators.required])
    }
  )
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


  get pizzaCrust(): IngredientModel { return this.crust.get("userCrust").value as IngredientModel}
  get pizzaSauce(): IngredientModel { return this.sauce.get("userSauce").value as IngredientModel}
  get cheeseToppings(): IngredientModel[] { return this.cheeses.get("userCheeses").value as IngredientModel[] }
  get meatToppings(): IngredientModel[] { return this.meats.get("userMeats").value as IngredientModel[] }
  get vegetableToppings(): IngredientModel[] { return this.vegetables.get("userVegetables").value as IngredientModel[] }


  total: number;

  constructor(public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private api: LoginService) {

    this.total = 0.00
  }



  openDetail() {
    this.dialog.open(OrderComponent, {
      panelClass: "detailsDialog"
    });
  }

  disableCheeseSelect() {
    if (this.cheeseSelector) {
      this.cheeseSelector = false;
    }
    else
      this.cheeseSelector = true;
  }

  disableMeatSelect() {
    if (this.meatSelector) {
      this.meatSelector = false;
    }
    else
      this.meatSelector = true;
  }

  disableVegetableSelect() {
    if (this.vegetableSelector) {
      this.vegetableSelector = false;
    }
    else
      this.vegetableSelector = true;
  }


  checkList() {
    console.log(this.cheeses.value);
  }

  async loadIngredients() {
    await this.api.getIngredients().then(res => {
      this.ingredients = res;

    });

    if (this.ingredients.length == 0) {
      console.log("loading...");
    }
    else {
      // console.log("Crusts1: ", this.ingredients);
      for (let i = 0; i < this.ingredients.length; i++) {
        if (this.ingredients[i].ingredientType.name == "Crusts") {
          this.crustList.push(this.ingredients[i])
        }
        if (this.ingredients[i].ingredientType.name == "Sauces") {
          this.sauceList.push(this.ingredients[i])
        }
        if (this.ingredients[i].ingredientType.name == "Cheeses") {
          this.cheeseList.push(this.ingredients[i])
        }
        if (this.ingredients[i].ingredientType.name == "Meats") {
          this.meatList.push(this.ingredients[i])
        }
        if (this.ingredients[i].ingredientType.name == "Vegetables") {
          this.vegetableList.push(this.ingredients[i])
        }
      }
      console.log("Crusts: ", this.crustList);
    }
    console.log("loaded!")

  }

  ngOnInit() {

    this.loadIngredients();

    // for (let ingredient of this.ingredients)
    // {
    //   if(ingredient.ingredientType.name == "crust")
    //   {
    //     this.crustList.push(ingredient)
    //   }
    //   if(ingredient.ingredientType.name == "sauce")
    //   {
    //     this.sauceList.push(ingredient)
    //   }
    //   if(ingredient.ingredientType.name == "cheese")
    //   {
    //     this.cheeseList.push(ingredient)
    //   }
    //   if(ingredient.ingredientType.name == "meat")
    //   {
    //     this.cheeseList.push(ingredient)
    //   }
    //   if(ingredient.ingredientType.name == "vegetable")
    //   {
    //     this.vegetableList.push(ingredient)
    //   }
    // }

  }

  loadOrderIngredients() {
    for (let crust of this.crustList) {
      if (crust.name == this.pizzaCrust.name ){
        this.total += this.pizzaCrust.price
        this.orderList.push(this.pizzaCrust)
      }
    }

    for (let sauce of this.sauceList) {
      if (sauce.name == this.pizzaSauce.name) {
        this.total += this.pizzaSauce.price
        this.orderList.push(this.pizzaSauce)
      }
    }

    for (let cheese of this.cheeseList) {
      for (let selected of this.cheeseToppings) {
        if (cheese.name == selected.name) {
          this.total += selected.price
          this.orderList.push(selected)
        }
      }
    }

    for (let meat of this.meatList) {
      for (let selected of this.meatToppings) {
        if (meat.name == selected.name) {
          this.total += selected.price
          this.orderList.push(selected)
        }
      }
    }

    for (let vegetable of this.vegetableList) {
      for (let selected of this.vegetableToppings) {
        if (vegetable.name == selected.name) {
          this.total += selected.price
          this.orderList.push(selected)
        }
      }
    }

  }

  OnSubmit() {
    

    //temp = new PizzaIngredientModel

    console.log("order list => ",this.orderList)

    for (let selected of this.orderList) {
      this.tempPizza = {
        ingredientId: selected.id,
          ingredient: selected,
          id: 0,
          pizzaId: 0,
      }
      this.pizzaIngredients.push(this.tempPizza)
    }
    this.pizza = 
    {
      id: 0,
      orderId: 0,
      name: "pizza",
      pizzaingredients: this.pizzaIngredients
    }

    this.order = 
    {
      id: 0,
      userId: 1,
      delivererId: 1,
      delivered: false,
      pizzas: [this.pizza]
    }

    console.log("Order => ", this.order)

    this.api.CreateOrder(this.order)
    .then(response => console.log("Order created!!!"))
    .catch(error => console.log("Did not create....", error))

  }

}
