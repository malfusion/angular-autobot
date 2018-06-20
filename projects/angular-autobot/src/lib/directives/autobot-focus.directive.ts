import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[libAutobotFocus]'
})
export class AutobotFocusDirective {

  constructor(el: ElementRef) {
    el.nativeElement.focus();
  }

}
