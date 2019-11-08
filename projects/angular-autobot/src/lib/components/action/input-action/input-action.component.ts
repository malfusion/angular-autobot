import { Component, OnInit } from '@angular/core';
import { AbstractActionComponent } from '../abstract-action.component';

@Component({
  selector: 'lib-input-action',
  templateUrl: './input-action.component.html',
  styleUrls: ['./input-action.component.css']
})
export class InputActionComponent extends AbstractActionComponent implements OnInit {
  textValue = '';

  constructor() {
    super();
  }

  ngOnInit() {}

  onSubmit() {
    this.resolver(this.textValue);
  }

  // handle_action_text() {
  //   if (!this.action.text.value) return;
  //   this._handleAction(this.action.text.value);
  //   this._actionResolve({
  //     type: 'text',
  //     value: this.action.text.value
  //   });
  //   this.action.text.value = '';
  // }
}
