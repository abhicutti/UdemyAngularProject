import { ShoppingListService } from './shopping-list.service';

import { Ingredient } from './../shared/ingredients.model';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']

})
export class ShoppingListComponent implements OnInit ,OnDestroy{
@Input() ingredients: Ingredient[] ;
private idChangeSub:Subscription;


  constructor(private shoppingListService: ShoppingListService) { }

ngOnInit() {

this.ingredients = this.shoppingListService.getIngredient();
this.idChangeSub=

    // this.ingredients = this.shoppingListService.getIngredient();
    this.shoppingListService.newIngredientAdded.subscribe(
      (ingredient:Ingredient[]) =>
      {
        console.log(5, ingredient);
        this.ingredients = ingredient;
      }
    );
  }
  onEditItem(index:number)
  {
this.shoppingListService.startedEditing.next(index);

  }
  ngOnDestroy()
  {
    this.idChangeSub.unsubscribe();
  }

}
