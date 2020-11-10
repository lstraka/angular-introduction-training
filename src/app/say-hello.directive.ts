import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSayHello]'
})
export class SayHelloDirective {

  constructor(element: ElementRef) {
    if(element){
      element.nativeElement.innerHTML = 'Say hello ';
    }
  }

}
