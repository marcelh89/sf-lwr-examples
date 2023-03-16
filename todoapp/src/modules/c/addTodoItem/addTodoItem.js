import { LightningElement, track } from "lwc";

export default class AddTodoItem extends LightningElement {
  @track todoItem = { name: "" };

  handleChange(event) {
    this.todoItem.name = event.target.value;
  }

  handleAddTodoItem() {
    const addEvent = new CustomEvent("addtodoitem", { detail: this.todoItem });
    this.dispatchEvent(addEvent);
    this.todoItem = { name: "" };
  }
}
