import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
// import { ShoppingRoutingmodule } from './shopping-routing-module';

@NgModule(
  {

    declarations:[ShoppingListComponent,
      ShoppingEditComponent],
    imports: [RouterModule.forChild([{path: '', component: ShoppingListComponent},]),
      FormsModule,
      ReactiveFormsModule,
      SharedModule]
  }
)
export class ShoppingModule{



}
