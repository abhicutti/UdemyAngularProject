import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService, AuthResponseData } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authservice:AuthService, private router:Router) { }

  ngOnInit(): void { }

loginMode= true;
isLoading =false;
error:string;

onSwitch(){

this.loginMode=!this.loginMode  //false

}

OnSubmit(form:NgForm)
{

if (!form.valid)
{
  return;
}

const email=form.value.email;
const password= form.value.password;
this.isLoading=true;
let authObs : Observable<AuthResponseData>;
if(this.loginMode)
{
 authObs= this.authservice.login(email,password);
 form.reset()
}
else
{
authObs=this.authservice.signUp(email,password);
form.reset();
}


authObs.subscribe(
  resData =>{
  console.log(resData);
  this.isLoading=false;
  this.router.navigate(['/recipes']);
},
errorRes=>
{
  console.log(errorRes);
  this.error=errorRes;
  this.isLoading=false;
}
);
form.reset();
}

onHandleError()
{
  this.error=null;
}
}



