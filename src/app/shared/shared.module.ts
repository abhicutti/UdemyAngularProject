import { ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';
import { DropdownDirective } from './dropdown.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule(
  {
    declarations:[
      LoadingSpinnerComponent,
      AlertComponent,
      DropdownDirective,
    ],

  imports:[CommonModule],
  exports:[LoadingSpinnerComponent,AlertComponent,DropdownDirective,CommonModule]
  }
)

export class SharedModule{

}
