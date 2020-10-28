import { Router } from '@angular/router';
import { User } from './user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError,tap} from 'rxjs/operators';
import {throwError ,Subject,BehaviorSubject} from 'rxjs';
export interface AuthResponseData{
  kind:string;
  idToken:string;
  email:string;
  refreshToken:string;
  expiresIn :string;
  localId:string;
  registered?:boolean;
}
@Injectable({providedIn:'root'})
export class AuthService{

user =new BehaviorSubject<User>(null);
token:string=null;
private tokenExpirationduration: any;

constructor(private http: HttpClient ,private router:Router){
  }



  signUp(email:string, password:string){
    console.log(email,password);
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAlvssNb4a5vP4pm05zKEti2QO5IZFzHN8',
          {
            email:email,
            password:password,
            returnSecureToken: true
          }
          ).pipe(catchError(this.handleError), tap(resData =>{this.HandleAuthentication(resData.email,resData.localId,resData.idToken,+resData.expiresIn);

          }));


  }


login(email:string ,password:string)
{
  return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAlvssNb4a5vP4pm05zKEti2QO5IZFzHN8',
  {
    email:email,
    password:password,
    returnSecureToken:true
  }).pipe(catchError(this.handleError), tap(resData =>{this.HandleAuthentication(resData.email,resData.localId,resData.idToken,+resData.expiresIn);

  }));
}

logout(){
  this.user.next(null);
  this.router.navigate(['auth']);
  localStorage.removeItem('userData');
  if(this.tokenExpirationduration)
  {
    clearTimeout(this.tokenExpirationduration);
  }
this.tokenExpirationduration=null;
}

autoLogin()
{
const userData:{
  email: string;
id:string;
_token: string;
_tokenExpirationDate:string;
}=JSON.parse(localStorage.getItem('userData'));
if(!userData)
{
  return;
}
const loadedUser= new User(userData.email,userData.id,userData._token, new Date(userData._tokenExpirationDate));
if(loadedUser.token)
this.user.next(loadedUser);
const expirationduration= new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
this.autoLogout(expirationduration);

}


autoLogout(expirationduration:number)
{
  this.tokenExpirationduration=setTimeout(() => {
    this.logout();
  }, expirationduration);

}

private handleError(errorRes:HttpErrorResponse)
{
  let errorMsg ="An unknown error occured !";
  if(!errorRes.error || !errorRes.error.error) //network error
  {
    return throwError(errorMsg);
  }

  switch (errorRes.error.error.message)
    {
      case 'EMAIL_EXISTS':
      errorMsg='This email aready exist';
      break;
      case 'EMAIL_NOT_FOUND':
      errorMsg='This email DOES NOT exist';
      break;
      case 'INVALID_PASSWORD':
      errorMsg='This Password is not correct';
      break;

    }
  return throwError(errorMsg);
    }

    private HandleAuthentication(email:string , userid:string , token:string , expiresin:number)
    {
      const expirationDate = new Date(new Date().getTime() + + expiresin *1000);
            const user =new User(email,userid,token,expirationDate);
            this.user.next(user);
            console.log(user);
            this.autoLogout(expiresin * 1000);
            localStorage.setItem('userData',JSON.stringify(user));


    }
}


