import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  template: ` Favorite Color: <input type="text" [(ngModel)]="favoriteColor">{{favoriteColor}} `,
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  favoriteColor = 'blue';
  constructor() { }

  ngOnInit(): void {
  }

}
