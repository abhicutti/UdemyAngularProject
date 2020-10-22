import { Ingredient } from './../shared/ingredients.model';
export class Recipe{
public name: string;
public description: string;
public imagepath: string;
public Ingredient: Ingredient[];

constructor(name: string, description: string, imagepath: string, Ingredient : Ingredient[])
{
this.name = name;
this.description = description;
this.imagepath = imagepath;
this.Ingredient = Ingredient;
}
}
