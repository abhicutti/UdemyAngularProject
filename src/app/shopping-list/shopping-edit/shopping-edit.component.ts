import { Subscription } from 'rxjs';
import { ShoppingListService } from './../shopping-list.service';

import { Ingredient } from './../../shared/ingredients.model';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { format } from 'path';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy {

  @ViewChild('editForm') editform:NgForm;
  subscrpition:Subscription;
  editmode=false;
  editmodeIndex;
editedItem:Ingredient;

  constructor(private shoppingListService:ShoppingListService) { }

onSubmit(editForm:NgForm)
{
console.log(editForm.value);
const value = editForm.value;
const newIngredient = new Ingredient(value.name , value.amount);
if(this.editmode)
{
this.shoppingListService.onEditIngredient(this.editmodeIndex,newIngredient)
}
else{
this.shoppingListService.onIngredientAdded(newIngredient);
}
this.editmode=false;
editForm.reset();
}

onClear()
{
  this.editform.reset();
  this.editmode=false;
}
onDelete()
{

    this.shoppingListService.onDeleteIngredient(this.editmodeIndex);
  this.onClear();

}
  ngOnInit(): void {
this.subscrpition=this.shoppingListService.startedEditing.subscribe(
  (index:number) => {
    this.editmode=true;
this.editmodeIndex=index;
this.editedItem=this.shoppingListService.getIngredientIndex(this.editmodeIndex);
this.editform.setValue(
  {
    name: this.editedItem.name,
    amount: this.editedItem.amount
  }
);

  }
);


  }


ngOnDestroy(){
  this.subscrpition.unsubscribe();
}

}
