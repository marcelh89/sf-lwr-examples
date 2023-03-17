import { LightningElement, track } from "lwc";
import todoStore from "store";
import { setProp } from "@ngneat/elf";

export default class TodoListComponent extends LightningElement {
  newTodo = "";
  todos = []

  connectedCallback() {
    todoStore.subscribe((state) => {
      this.todos = state?.todos || [];
    });
  }

  updateNewTodo(event) {
    this.newTodo = event.target.value;
  }

  addTodo() {
    const todo = {
      id: Date.now(),
      title: this.newTodo,
    };
    todoStore.update(setProp("todos", [...this.todos, todo]));
    this.newTodo = "";
  }
}
