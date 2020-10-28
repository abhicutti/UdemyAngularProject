import { AuthService } from './auth/auth.service';


import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { title } from 'process';
import {HttpClient} from '@angular/common/http';







@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent  implements OnInit{
constructor(private authservice:AuthService)
{

}
ngOnInit()
{
this.authservice.autoLogin();
}


  //Subscriptions = ['Basic', 'Advanced', 'Pro'];

// constructor(private http: HttpClient)
// {}
// form: FormGroup;
// ngOnInit()
// {


// this.form = new FormGroup(
// {
// 'title': new FormControl(null , [Validators.required]),
// 'mail': new FormControl(null, [Validators.required , Validators.email])


// });

// this.Fetchpost();
// }
// onPost(postData)
// {
// this.http.post('https://learnangular-c054d.firebaseio.com/posts.json',postData.value).subscribe
// (responseData => {
// console.log(responseData);
// });
// }

// private Fetchpost()
// {
//   this.http.get('https://learnangular-c054d.firebaseio.com/posts.json').subscribe(post => {console.log(post)}
//   );
// }

//  TEMPLE-DRIVEN FORM

//   selectedSubscription = 'Advanced';
// @ViewChild("signupForm") signupform: NgForm
// orm: FormGroup;
// ngOnInit()
// {
// this.form = new FormGroup(
// {
// 'Title': new FormControl(null , [Validators.required]),
// 'Mail': new FormControl(null, [Validators.required , Validators.email])


// });
// }
//   onSubmit()
//   {
// console.log(this.signupform.value);
//   }

//REACTIVE-FORM
// projectForm: FormGroup;
// ngOnInit()
// {
// this.projectForm = new FormGroup(
// {
// 'projectName': new FormControl(null , [Validators.required, CustomValidators.invalidProjectName], CustomValidators.asyncInvalidProjectName]),
// 'email': new FormControl(null, [Validators.required , Validators.email]),
// 'projectStatus': new FormControl('critical')

// });
// }

// onSaveProject()
// {
//   console.log(this.projectForm.value);
// }

// users:string[]
//   constructor(private userService: UserService)
//   {

//   }
//   ngOnInit() {
//    this.users = this.userService.inactiveUsers;
//   }
//   value ;
//   oddNumbers: number[] = [];
//   evenNumbers: number[] = [];
//   title = 'LearnAngularApp';
//   serverElements = [{type: 'server', name: 'Testserver' , content: 'just a test!'}];
//   onServerAdded(serverData: {serverName: string , serverContent: string})
// {
//   this.serverElements.push(
//     {
//       type: 'server',
//       name: serverData.serverName,
//       content: serverData.serverContent
//     }
//   );
// }
// // tslint:disable-next-line: typedef
// onBlueprintAdded(blueprintData: {serverName: string , serverContent: string})
// {
//   this.serverElements.push(
//     {
//       type: 'blueprint',
//       name: blueprintData.serverName ,
//       content: blueprintData.serverContent
//     }
//   );
// }

//   onFireEvent(firedNum: number)
//   {
//     if(firedNum % 2 === 0)
//     {
// this.evenNumbers.push(firedNum);
//     }
//     else
//     {
//       this.oddNumbers.push(firedNum);
//     }
//   }

//   onClearEvent(firedNum: number)
//   {
// console.log(firedNum);
//   }
// loadedfeature;
//   onNavigate(feature: string)
//   {
// this.loadedfeature = feature;
//   }
}
