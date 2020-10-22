import { AuthComponent } from './auth/auth.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeComponent } from './recipe/recipe.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';


const appRoutes:Routes = [
{path: 'recipes', component : RecipeComponent , children:[

    {path:'', component : RecipeStartComponent},
    {path:'new', component: RecipeEditComponent},
    {path:':id', component: RecipeDetailComponent},

    {path:':id/edit', component: RecipeEditComponent}


]},
{path: 'shopping-list', component: ShoppingListComponent},
{path: '', redirectTo: '/recipes' , pathMatch: 'full'},
{path: 'auth',component:AuthComponent}
];
@NgModule(
  {
imports: [RouterModule.forRoot(appRoutes)],
exports:[RouterModule]
  }
)
export class AppRoutingModule
{

}
