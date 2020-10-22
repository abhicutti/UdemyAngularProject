import { RecipeService } from './../recipe.service';

import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Routes } from '@angular/router';



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']

})

export class RecipeDetailComponent implements OnInit {
recipe: Recipe;
id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router:Router) { }


  ngOnInit(){
this.route.params.subscribe(

  (params:Params) => {
    this.id = +params['id'];
    console.log(params['id']);
    this.recipe = this.recipeService.getRecipes(this.id);
  }
);
  }

  onAddToShoppingList()
  {
    console.log(1,this.recipe.Ingredient);
    this.recipeService.addIngredientsToShoppingList(this.recipe.Ingredient);

  }
  onEdit()
  {
// this.router.navigate(['../', this.id, 'edit'],{relativeTo: this.route});
this.router.navigate(['edit'],{relativeTo: this.route});
  }

  onDelete()
  {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['recipes']);
  }


}
