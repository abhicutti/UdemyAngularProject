import { RecipeService } from './../recipe.service';
import { Subscription } from 'rxjs';
import { Recipe } from './../recipe.model';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']

})
export class RecipeListComponent implements OnInit , OnDestroy {

  recipes: Recipe[];
recipeSubscription:Subscription;

  constructor(private recipeService: RecipeService , private router:Router, private route:ActivatedRoute)
  {}

  onNewRecipe()
  {
this.router.navigate(['new'] , {relativeTo: this.route} );
  }

  ngOnInit(){

   this.recipeSubscription= this.recipeService.recipeChanged.subscribe(
      (recipe:Recipe[]) =>
      {
        this.recipes=recipe;
      }
    );

   this.recipes= this.recipeService.getRecipe();
  }

  ngOnDestroy(){

this.recipeSubscription.unsubscribe();

  }

}
