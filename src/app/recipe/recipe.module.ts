import { RecipeRoutingModule } from './recipe-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


@NgModule(
  {
declarations:[RecipeComponent,
  RecipeDetailComponent,
  RecipeListComponent,
  RecipeItemComponent,   RecipeEditComponent
],
imports:[RouterModule,SharedModule,FormsModule,ReactiveFormsModule,RecipeRoutingModule]
// exports:[RecipeComponent,
//   RecipeDetailComponent,
//   RecipeListComponent,
//   RecipeItemComponent,
//   RecipeEditComponent
// ]
  }
)
export class RecipesModule{

}
