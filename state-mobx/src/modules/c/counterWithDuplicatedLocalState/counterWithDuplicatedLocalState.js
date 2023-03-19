import { LightningElement, track } from "lwc";
import { counterStore } from "store";
import { autorun } from "mobx";

export default class Counter extends LightningElement {
  @track count;
  @track doubleCount;

  connectedCallback() {
    // Update the count and doubleCount when the store changes
    this.dispose = autorun(() => {
      this.count = counterStore.getCount();
      this.doubleCount = counterStore.doubleCount;
    });
  }

  disconnectedCallback() {
    // Clean up the autorun when the component is disconnected
    if (this.dispose) {
      this.dispose();
    }
  }

  increment() {
    counterStore.increment();
  }

  decrement() {
    counterStore.decrement();
  }
}
