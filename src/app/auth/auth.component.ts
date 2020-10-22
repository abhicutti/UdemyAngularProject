import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
loginMode=true;
onSwitch(){
this.loginMode=!this.loginMode  //false

}

onSubmit(form:NgForm)
{

}

}
