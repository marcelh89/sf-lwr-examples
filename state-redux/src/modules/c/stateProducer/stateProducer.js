import { LightningElement, track } from "lwc";
import store from "store";
import { increment, decrement } from "store";

export default class Counter extends LightningElement {
  @track count = 0;

  connectedCallback() {
    this.unsubscribe = store.subscribe(() => {
      const state = store.getState();
      this.count = state.counter.value;
    });
  }

  disconnectedCallback() {
    this.unsubscribe();
  }

  handleIncrementClick() {
    store.dispatch(increment());
  }

  handleDecrementClick() {
    store.dispatch(decrement());
  }
}
