// import { Component , OnInit} from '@angular/core';
// import {FormsModule} from '@angular/forms';
import {Component} from '@angular/core';
@Component({
  selector: 'app-my-assigment2',
  templateUrl: './my-assigment2.component.html',
  styleUrls: ['./my-assigment2.component.css']
})
export class MyAssigment2Component  {
  username = '';
  showSecret = false;
  log = [];

  //  tslint:disable-next-line: typedef
  onToggle()
  {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());

  }

  // constructor() { }

  // ngOnInit(): void {
  // }

}
