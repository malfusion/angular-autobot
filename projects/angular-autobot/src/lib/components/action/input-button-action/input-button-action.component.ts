import { Component, OnInit } from '@angular/core';
import { AbstractActionComponent } from '../abstract-action.component';

@Component({
  selector: 'lib-input-button-action',
  templateUrl: './input-button-action.component.html',
  styleUrls: ['./input-button-action.component.css']
})
export class InputButtonActionComponent extends AbstractActionComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}
}
