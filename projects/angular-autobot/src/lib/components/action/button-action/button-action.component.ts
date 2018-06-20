import { Component, OnInit } from '@angular/core';
import { AbstractActionComponent } from '../abstract-action.component';

@Component({
  selector: 'lib-button-action',
  templateUrl: './button-action.component.html',
  styleUrls: ['./button-action.component.css']
})
export class ButtonActionComponent extends AbstractActionComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}

  itemClicked(item) {
    this.resolver(item);
  }

  // handleActionResult(button) {
  //   this._handleAction(button.text);
  //   var defaultActionObj = {
  //     type: 'button',
  //     text: button.text,
  //     value: button.value
  //   };

  //   for (var eachProperty in button) {
  //     if (button.hasOwnProperty(eachProperty)) {
  //       if (eachProperty !== 'type' && eachProperty !== 'text' && eachProperty !== 'value') {
  //         defaultActionObj[eachProperty] = button[eachProperty];
  //       }
  //     }
  //   }

  //   this._actionResolve(defaultActionObj);
  // }
}
