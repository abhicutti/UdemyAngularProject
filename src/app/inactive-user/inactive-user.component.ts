import { UserService } from './../users.services';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {

  users: string[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.users = this.userService.inactiveUsers;
  }
  onSetToActive(id:number)
  {
    this.userService.setToActive(id);
  }
}
