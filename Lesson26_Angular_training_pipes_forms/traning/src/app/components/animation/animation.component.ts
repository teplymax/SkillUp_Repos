import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('showHide', [ // опис анімації елемента @showHide
      state('show', style({ // стан show
        opacity: 1
      })),
      state('hide', style({ // стан hide
        opacity: 0
      })),
      // transition('show <=> hide', animate('500ms ease-in')), // тривалість анімації при переході станів, <=> обидві сторони, => одна сторона
      transition('show => hide', animate('1s')),
      transition('hide => show', animate('1s')),
    ]),
    trigger('showItem', [
      transition(':enter', [
        style({
          opacity: 0, transform: 'translateY(100%)'
        }),
        animate(2000)
      ])
    ])
  ]
})
export class AnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isShow = true;
  users = [
    {
      name: 'User 1'
    },
    {
      name: 'User 2'
    },
    {
      name: 'User 3'
    }
  ]

  toggle() {
    this.isShow = !this.isShow;
  }
}
