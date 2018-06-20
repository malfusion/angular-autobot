import { Component, OnInit, Input } from '@angular/core';
import { Action } from '../../models';
import { trigger, transition, style, animate } from '@angular/animations';


// TODO Do i really need this?
export interface IActionComponent {
  handleActionResult: (any) => void;
}

@Component({
  selector: 'lib-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css'],
  animations: [
    trigger(
      'slideFadeAnimation', [
        transition(':enter', [
          style({ transform: 'translateX(-10px)', opacity: 0 }),
          animate('300ms', style({ transform: 'translateX(0)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translateX(0)', opacity: 1 }),
          animate('300ms', style({ transform: 'translateX(-10px)', opacity: 0 }))
        ])
      ]
    )
  ],
})
export class ActionComponent implements OnInit {

  @Input() action: Action;
  @Input() resolver: (any) => void;
  constructor() { }

  ngOnInit() {
  }

}
