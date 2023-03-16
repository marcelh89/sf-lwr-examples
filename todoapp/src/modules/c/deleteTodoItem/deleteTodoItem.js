import { LightningElement, api } from "lwc";

export default class DeleteTodoItem extends LightningElement {
  @api todoItem;

  handleDeleteTodoItem() {
    const deleteEvent = new CustomEvent("deletetodoitem", {
      detail: this.todoItem.id,
    });
    this.dispatchEvent(deleteEvent);
  }
}
