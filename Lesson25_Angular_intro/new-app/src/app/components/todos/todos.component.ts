import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../app.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];
  constructor() {}
  addTodo(todo) {
    this.todos.push({
      id: this.todos.length + 1,
      completed: false,
      title: todo,
    });
  }
  ngOnInit(): void {}
}
