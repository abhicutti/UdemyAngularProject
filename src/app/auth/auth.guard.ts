import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router,ActivatedRouteSnapshot ,RouterStateSnapshot, UrlTree} from '@angular/router';
import { map, tap,take } from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{
constructor(private authservice:AuthService , private router:Router)
{

}

canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean| Promise<boolean |UrlTree > | Observable<boolean | UrlTree>
{

 return this.authservice.user.pipe
 ( take (1) ,map(user => {
   return !!user;
const isAuth =!!user
if(isAuth)
{return true;
}
return this.router.createUrlTree(['auth']);

 }
 )

//  tap(isAuth =>{
//    if(!isAuth)
//    {
// this.router.navigate(['auth']);
//    }
//  }
//  )
 );
}



}
