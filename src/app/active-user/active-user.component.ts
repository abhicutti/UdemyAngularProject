import { UserService } from './../users.services';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {
users: string[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.users = this.userService.activeUsers;
  }
  onSetToInactive(id:number)
  {
    this.userService.setToInactive(id);
  }

}
