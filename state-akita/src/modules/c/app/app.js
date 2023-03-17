import { LightningElement, track } from "lwc";
import todoStore from "store";
import { setProp } from "@ngneat/elf";

export default class TodoListComponent extends LightningElement {
  newTodo = "";
  //todos = []

  // you can get todos over pub-sub but then have to copy global state into local state
  connectedCallback() {
    // todoStore.subscribe((state) => {
    //   this.todos = state?.todos || [];
    // });
  }

  // or you can directly use the global state
  get todos() {
    // const {todos} = todoStore.getValue()
    const todos = todoStore.pipe(select((state) => state.user));
    return todos || [];
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
