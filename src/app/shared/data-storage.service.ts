import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipe/recipe.model';
import { RecipeService } from './../recipe/recipe.service';
import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { exhaust, exhaustMap, take  } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService{
  constructor(private http: HttpClient , private recipesService:RecipeService, private authservice:AuthService)
  {}

  storeRecipes()
  {

  const recipe = this.recipesService.getRecipe();
 return this.http.put('https://learnangular-c054d.firebaseio.com/recipes.json', recipe).subscribe(response =>{ console.log(response);});
  }

  FetchRecipes()
  {
    this.authservice.user.pipe(take(1),exhaustMap(user=>{
      return this.http.get<Recipe[]>(
        'https://learnangular-c054d.firebaseio.com/recipes.json',{
          params:new HttpParams().set('auth',user.token)
        }
      );
    })).subscribe(user =>{
this.recipesService.setRecipes(user);});


// return this.http.get<Recipe[]>('https://learnangular-c054d.firebaseio.com/recipes.json').subscribe(Response =>{this.recipesService.setRecipes(Response);});
//   }
}
}
