import { LightningElement, track } from "lwc";
import { counterStore } from "store";
import { autorun } from "mobx";

export default class Counter extends LightningElement {
  @track _version = 0;
  dispose;

  connectedCallback() {
    // Trigger a rerender of the component when the store changes
    this.dispose = autorun(() => {
      counterStore.getCount();
      counterStore.doubleCount;
      this._version++; // Update the tracked property to trigger a rerender
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

  get count() {
    return counterStore.getCount();
  }

  get doubleCount() {
    return counterStore.doubleCount;
  }
}
