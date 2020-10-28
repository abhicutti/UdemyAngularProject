import { UserService } from './users.services';
import { DataStorageService } from './shared/data-storage.service';
import { CounterService } from './counter.service';
import { RecipeService } from './recipe/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { NgModule } from '@angular/core';

///////////ONLY FOR SERVICE

@NgModule({
  providers:[UserService, CounterService, RecipeService, ShoppingListService,DataStorageService]


})
export class CoreModule{}
