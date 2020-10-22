import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredients.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Injectable()
export class RecipeService
{
  recipeSelected = new Subject<Recipe>();
  recipeChanged=new Subject<Recipe[]>();
  private recipes: Recipe[] = [new Recipe('A test Recipe', 'Simply a test',
  'https://www.maggi.co.uk/sites/default/files/styles/maggi_desktop_image_style/public/NUK1265%20maggi%20Recipes%20banner%201500x700px%20opt2A.jpg?h=4f5b30f1&itok=DcsF1RwA'
  , [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
  new Recipe('A test Recipe1', 'Simply a test1',
  'https://www.maggi.co.uk/sites/default/files/styles/maggi_desktop_image_style/public/NUK1265%20maggi%20Recipes%20banner%201500x700px%20opt2A.jpg?h=4f5b30f1&itok=DcsF1RwA'
  , [new Ingredient('Meat', 1), new Ingredient('French Fries', 10)])];
  constructor(private shoppingListService: ShoppingListService)
  {

  }
  getRecipe()
  {
    return this.recipes.slice();
  }

  getRecipes(index:number)
  {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredient:Ingredient[])
  {
   console.log(2,ingredient);
  this.shoppingListService.onAddingredient(ingredient);
  }

  addRecipe(recipes:Recipe)
  {
    this.recipes.push(recipes);
    this.recipeChanged.next(this.recipes.slice());
  }
  updateRecipe(index:number, newRecipe:Recipe)
  {
    this.recipes[index]=newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number)
  {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

  //override

  setRecipes(recipe:Recipe[])
  {
    this.recipes=recipe;
    this.recipeChanged.next(this.recipes.slice());
  }
}
