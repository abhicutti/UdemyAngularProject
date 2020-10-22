import { Recipe } from './../recipe/recipe.model';

import { RecipeService } from './../recipe/recipe.service';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({providedIn: 'root'})
export class DataStorageService{
  constructor(private http: HttpClient , private recipesService:RecipeService)
  {}

  storeRecipes()
  {

    const recipe = this.recipesService.getRecipe();
 return this.http.put('https://learnangular-c054d.firebaseio.com/recipes.json', recipe).subscribe(response =>{ console.log(response);});
  }

  FetchRecipes()
  {
return this.http.get<Recipe[]>('https://learnangular-c054d.firebaseio.com/recipes.json').subscribe(Response =>{this.recipesService.setRecipes(Response);});
  }
}
