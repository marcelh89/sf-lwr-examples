import { LightningElement, track } from "lwc";
import todoStore from "store";
//import { select } from "@ngneat/elf";

export default class TodoListComponent extends LightningElement {
  todos = [];

  // you can get todos over pub-sub but then have to copy global state into local state
  connectedCallback() {
    todoStore.subscribe((state) => {
      this.todos = state?.todos || [];
    });
  }

  //   get todos() {
  //     const {todos} = todoStore.getValue()
  //     //const todos = todoStore.pipe(select((state) => state?.todo)); // TODO find out why this has a bug
  //     return todos || [];
  //   }
}
