import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable()
export class TodoService {

  private todos: Todo[] = [
    new Todo('todo 1'),
    new Todo('todo 2', 1, true),
    new Todo('todo 3')
  ];

  constructor() { }

  list(): Todo[] {
    return this.todos;
  }

  create(a: string, b: Number, c: Boolean) {
    if (a == null || b == null || c == null) {
      console.error('Some of TODOs parameters is null');
      return;
    }
    this.todos.push(new Todo(a, b, c.valueOf()));
  }

}
