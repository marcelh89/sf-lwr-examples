import { LightningElement, track } from "lwc";

export default class TodoList extends LightningElement {
  @track todoItems = [{ id: 1, name: "Todo1" }];

  handleAddTodoItem(event) {
    this.todoItems = [...this.todoItems, event.detail];
  }

  handleDeleteTodoItem(event) {
    const index = this.todoItems.findIndex(
      (todoItem) => todoItem.id === event.detail
    );
    this.todoItems = [
      ...this.todoItems.slice(0, index),
      ...this.todoItems.slice(index + 1),
    ];
  }
}
