import { RecipesModule } from './recipe/recipe.module';
import { AuthComponent } from './auth/auth.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeComponent } from './recipe/recipe.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { AuthGuard } from './auth/auth.guard';


const appRoutes:Routes = [

{path: '', redirectTo: '/recipes' , pathMatch: 'full'},
{path:'recipes',loadChildren:() => import('./recipe/recipe.module').then(m => m.RecipesModule)},
{path:'shopping-list',loadChildren:() => import('./shopping-list/shopping.module').then(m => m.ShoppingModule)},
{path:'auth',loadChildren:() => import('./auth/auth.module').then(m=>m.AuthModule)}
];
@NgModule(
  {
imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})],
exports:[RouterModule]
  }
)
export class AppRoutingModule
{

}
