import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  todoService: TodoService;
  router: Router;
  constructor(todoService: TodoService, router: Router) {
    this.todoService = todoService;
    this.router = router;
  }

  ngOnInit(): void {
    this.todoService.getTodo();
  }

  selectTodo(todo) {
    this.todoService.selectedTodo = todo;
    this.router.navigate(['/edit']);
  }
}
