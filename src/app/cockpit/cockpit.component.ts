import { Component, ElementRef, EventEmitter, OnInit , Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
newServerName = '';
newServerContent = '';
@Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
@Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
@ViewChild('serverContentInput') serverContentInput: ElementRef;
onAddServer(nameInput: HTMLInputElement){
   this.serverCreated.emit({serverName: nameInput.value,
    //  serverName: this.newServerName, // with twowaybinding
    serverContent: this.serverContentInput.nativeElement.value
  });
}

onAddBlueprint(nameInput: HTMLInputElement)
{
    this.blueprintCreated.emit({serverName: nameInput.value,
      //  serverName: this.newServerName,
      serverContent: this.serverContentInput.nativeElement.value
  });
}
  constructor() { }

  ngOnInit(): void {
  }

}
