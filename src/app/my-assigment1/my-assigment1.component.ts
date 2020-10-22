import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-assigment1',
  template: `
  <p>You are in danger</p>
  `,
  styles: [
    `
  p {
    padding:10px;
    background-color:mistyrose;
    border:1px solid red;
  }
  `
  ]
})
export class MyAssigment1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
