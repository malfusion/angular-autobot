import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[libAutobotScroll]'
})
export class AutobotScrollDirective {
  constructor(el: ElementRef) {
    // _container.scrollTop = _container.scrollHeight;
  }
}
