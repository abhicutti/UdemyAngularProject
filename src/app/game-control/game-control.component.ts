import { Component, OnInit,  EventEmitter , Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

interval;
initialNum = 0;
@Output()  incrementSetEvent = new EventEmitter<number>();
@Output()  clearSetEvent = new EventEmitter<{clearstatus: any}>();

StartGame()
{
  this.interval = setInterval(() => {
    this.incrementSetEvent.emit(this.initialNum + 1);
    this.initialNum++;
  }, 1000);

}

StopGame()
{
  clearInterval(this.interval);
// this.incrementSetEvent.emit({clearstatus: clearInterval(this.ref)});
}
  constructor() { }

  ngOnInit(): void {
  }

}
