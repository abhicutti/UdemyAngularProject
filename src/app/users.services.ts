import { CounterService } from './counter.service';
import { Injectable } from '@angular/core';
@Injectable()
export class UserService

{
  activeUsers = ['ramya', 'ramesh'];
  inactiveUsers = ['chris' , 'sanam'];
constructor(private counterservice:CounterService)
{

}
  setToInactive(ir: number)
  {
this.inactiveUsers.push(this.activeUsers[ir]);
this.activeUsers.splice(ir,1);
this.counterservice.incrementActivetoInactive();
  }
  setToActive(id: number)
  {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id,1);
    this.counterservice.incrementInactivetoActive();
  }
}
