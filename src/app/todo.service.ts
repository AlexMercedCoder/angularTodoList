import { Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url = "http://localhost:10000/todos"
  todos = []
  selectedTodo: any;

  async getTodo(){
    const response = await fetch(this.url)
    const data = await response.json()
    this.todos = data
  }

  async createTodo(newTodo){
    await fetch(this.url,{
      method: "post",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newTodo)
    })
    this.getTodo()
  }

  async updateTodo(updatedTodo){
    await fetch(this.url+`/${updatedTodo._id}`,{
      method: "put",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(updatedTodo)
    })
    this.getTodo()
  }

  async deleteTodo(deletedTodo){
    await fetch(this.url+`/${deletedTodo._id}`,{
      method: "delete",
    })
    this.getTodo()
  }

}
