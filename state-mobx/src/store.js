import { observable, action, computed } from 'mobx';

class CounterStore {
  _count = observable.box(0);

  getCount() {
    return this._count.get();
  }

  increment() {
    action(() => {
      this._count.set(this._count.get() + 1);
    })();
  }

  decrement() {
    action(() => {
      this._count.set(this._count.get() - 1);
    })();
  }

  get doubleCount() {
    return computed(() => this._count.get() * 2).get();
  }
}

export const counterStore = new CounterStore();