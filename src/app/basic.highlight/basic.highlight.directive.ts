
import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{
constructor(private elRef: ElementRef , private renderer: Renderer2)
{

}
ngOnInit() {
this.renderer.setStyle(this.elRef.nativeElement , 'background-color' , 'red');
}
@HostListener('mouseenter') mouseover(eventData: Event)
{
  this.renderer.setStyle(this.elRef.nativeElement , 'background-color', 'blue');
}


}

