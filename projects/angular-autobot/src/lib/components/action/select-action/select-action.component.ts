import { Component, OnInit } from '@angular/core';
import { AbstractActionComponent } from '../abstract-action.component';

@Component({
  selector: 'autobot-select-action',
  templateUrl: './select-action.component.html',
  styleUrls: ['./select-action.component.css']
})
export class SelectActionComponent extends AbstractActionComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}

  // handle_action_select() {
  //   if (this.action.select.searchselect && !this.action.select.multipleselect) {
  //     if (!this.action.select.value.value) return;
  //     this._handleAction(this.action.select.value[this.action.select.label]);
  //     this._actionResolve({
  //       type: 'text',
  //       value: this.action.select.value.value,
  //       text: this.action.select.value.text,
  //       obj: this.action.select.value
  //     });
  //   }
  //   if (this.action.select.searchselect && this.action.select.multipleselect) {
  //     if (!this.action.select.value) return;
  //     var values = new Array();
  //     var labels = new Array();
  //     for (var i = 0; i < this.action.select.value.length; i++) {
  //       values.push(this.action.select.value[i].value);
  //       labels.push(this.action.select.value[i][this.action.select.label]);
  //     }
  //     this._handleAction(labels.join(', '));
  //     this._actionResolve({
  //       type: 'text',
  //       value: values.join(', '),
  //       text: labels.join(', '),
  //       obj: this.action.select.value
  //     });
  //   }
  //   else {
  //     if (!this.action.select.value) return;
  //     for (var i = 0; i < this.action.select.options.length; i++) { // Find select title
  //       if (this.action.select.options[i].value == this.action.select.value) {
  //         this._handleAction(this.action.select.options[i].text);
  //         this._actionResolve({
  //           type: 'text',
  //           value: this.action.select.value,
  //           text: this.action.select.options[i].text
  //         });
  //       }
  //     }
  //   }
  // }
}
