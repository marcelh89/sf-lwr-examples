import { LightningElement, track } from "lwc";

export default class AddTodoItem extends LightningElement {
  @track name = "";

  handleChange(event) {
    this.name = event.target.value;
  }

  handleAddTodoItem() {
    if (this.name !== "") {
      const addEvent = new CustomEvent("addtodoitem", { detail: this.name });
      this.dispatchEvent(addEvent);
      this.name = "";
    }
  }
}
