import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from './../shared/ingredients.model';

export class ShoppingListService
{
newIngredientAdded = new Subject<Ingredient[]>();
startedEditing= new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)];
    swap:Ingredient[]=[];
    getIngredient()
    {
      console.log('getmethod');
      return this.ingredients.slice();
    }

    getIngredientIndex(index:number)
    {
      return this.ingredients[index];

    }
    onIngredientAdded(ingredient: Ingredient)
    {
    this.ingredients.push(ingredient);
    this.newIngredientAdded.next(this.ingredients.slice());
    console.log('ingredientpush');

    }

    onEditIngredient(index:number,newIngredient:Ingredient)
    {
this.ingredients[index]=newIngredient;
this.newIngredientAdded.next(this.ingredients.slice());
    }

    onDeleteIngredient(index:number)
    {

      this.swap=this.ingredients.splice(index, 1);

      this.newIngredientAdded.next(this.ingredients.slice());

    }

onAddingredient(ingredients:Ingredient[])
{
  console.log(3,ingredients);
  for(let ingredient of ingredients)
  {
    console.log(4,ingredients);
this.onIngredientAdded(ingredient);
  }
  console.log(5, this.ingredients);
  // this.newIngredientAdded.emit(this.ingredients.slice());
}
// this.ingredients.push(...ingredients);
// this.newIngredientAdded.emit(this.ingredients.slice());

}
