import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Ingredient } from './../../shared/ingredients.model';

import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id: number;
editMode=false;
recipeForm:FormGroup;

  constructor(private route:ActivatedRoute , private recipeService:RecipeService, private router:Router ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (param:Params)=> {
this.id = +param['id']; //id:1

this.editMode = param['id'] !=null;
this.initForm();
 }
);


  }
initForm()
{

let recipeName='';
let recipeImagepath='';
let recipeDescription='';
let recipeIngredients = new  FormArray([]);

if(this.editMode)
{
const recipe= this.recipeService.getRecipes(this.id);

recipeName = recipe.name;
  recipeImagepath=recipe.imagepath;
  recipeDescription =recipe.description;

if (recipe['Ingredient']) {

    for (let Ingredient of recipe.Ingredient) {
      recipeIngredients.push(
        new FormGroup(
          {
            'name': new FormControl(Ingredient.name, Validators.required),
            'amount': new FormControl(Ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }
        )
      );
    }
  }




}
this.recipeForm = new FormGroup({
  'name': new FormControl(recipeName,Validators.required),
    'imagepath': new FormControl(recipeImagepath,Validators.required),
    'description' : new FormControl(recipeDescription,Validators.required),
    'ingredients': recipeIngredients
});
}

get controls() { // a getter!
  this.recipeForm.get('ingredients');

  return (<FormArray>this.recipeForm.get('ingredients')).controls;
  //return (this.recipeForm.get('ingredients') as FormArray).controls;

}
onSubmit()
{
  // const newRecipe= new Recipe(

  //     this.recipeForm.value['name'],
  //     this.recipeForm.value['description'],
  //     this.recipeForm.value['imagePath'],
  //     this.recipeForm.value['ingredients']

  //     );


if(this.editMode)
{
  this.recipeService.updateRecipe(this.id,this.recipeForm.value);
}
else{
  this.recipeService.addRecipe(this.recipeForm.value);
}
}

onAddIngredient()
{
  (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
    'name':new FormControl(),
    'amount':new FormControl()
  })
  );
}

onCancel()
  {
    this.router.navigate(['../'],{relativeTo: this.route});
  }

  OnDeleteIngredients(index:number)
  {
      //  (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
        (<FormArray>this.recipeForm.get('ingredients')).clear();
  }
}
