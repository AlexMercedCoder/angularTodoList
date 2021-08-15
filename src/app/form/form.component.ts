import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  route: ActivatedRoute;
  action: any;
  router: Router
  todoService: TodoService
  id: any;
  reminder: String = "";
  completed: Boolean = false;

  constructor(route: ActivatedRoute, router: Router, todoService: TodoService) {
    this.route = route;
    this.router = router
    this.action = this.router.url
    this.todoService = todoService

    if (this.action === "/edit"){
      this.reminder = this.todoService.selectedTodo.reminder
      this.completed = this.todoService.selectedTodo.completed
      this.id = this.todoService.selectedTodo._id
    }
  }

  handleSubmit(){

    const todo: any = {reminder: this.reminder, completed: this.completed}

    if (this.action === "/create"){
      this.todoService.createTodo(todo)
      this.reminder = ""
      this.completed = false
      this.router.navigate(["/"])
    }

    if (this.action === "/edit"){
      todo._id = this.id
      this.todoService.updateTodo(todo)
      this.reminder = ""
      this.completed = false
      this.router.navigate(["/"])
    }
  }

  ngOnInit(): void {}
}
