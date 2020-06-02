import { Component } from '@angular/core';
export interface Todo {
  id: number;
  completed: boolean;
  title: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'new-app';
  a = 1;
  b = 1;
  c = 0;
  valueC() {
    console.log(++this.c);
    return this.c;
  }
  public todos: Todo[] = [
    { id: 1, completed: false, title: 'todo' },
    { id: 2, completed: false, title: 'todo' },
    { id: 3, completed: false, title: 'todo' },
  ];
}
