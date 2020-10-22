import { ShoppingListService } from './../shopping-list/shopping-list.service';

import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers:[]

})
export class RecipeComponent implements OnInit {
selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe: Recipe ) => {
    //     this.selectedRecipe = recipe;
    //   }
    // );
  }

}
