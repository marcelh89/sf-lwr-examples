import { LightningElement, track } from "lwc";
import { store } from "store";

export default class Counter extends LightningElement {
  @track count = store.state.count;

  connectedCallback() {
    store.subscribe("count", (updatedCount) => {
      this.count = updatedCount;
    });
  }

  increment() {
    store.increment();
  }

  decrement() {
    store.decrement();
  }
}
