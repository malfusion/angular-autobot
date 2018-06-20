import { Input } from '@angular/core';
import { Action } from '../../models';

export class AbstractActionComponent {
  @Input() action: Action;
  @Input() resolver: (any) => void;

  constructor() {}
}
