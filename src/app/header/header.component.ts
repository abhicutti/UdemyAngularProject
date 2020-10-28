import { AuthService } from './../auth/auth.service';
import { Subscription } from 'rxjs';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
  }
)

export class HeaderComponent implements OnInit {
  authenticated =false;
  private userSub:Subscription;
  constructor(private dataStorageService:DataStorageService,private authservice:AuthService)
  {}
  collapsed = true;
imgUrl:string;
  ngOnInit()
  {

this.userSub=this.authservice.user.subscribe(user =>{
  this.authenticated=!!user;
  console.log(!user);
  console.log(!!user);
});
this.imgUrl='src/assets/upload.jpg';
}


  onSaveData()
  {
    this.dataStorageService.storeRecipes();
  }
  onFetchData()
    {
      this.dataStorageService.FetchRecipes();
    }
Logout()
{
  this.authservice.logout();
}

}
