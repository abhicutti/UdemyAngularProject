import { SharedModule } from './../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';

import { NgModule, Component } from '@angular/core';
import { AuthComponent } from './auth.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AuthComponent],
  imports:[FormsModule,ReactiveFormsModule,CommonModule,SharedModule, RouterModule.forChild([{path: '',component:AuthComponent}])],
  providers:[AuthService],
  exports:[RouterModule]


})
export class AuthModule{}
