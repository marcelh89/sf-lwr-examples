class SimpleStore {
    constructor() {
      this.state = {
        count: 0,
      };
      this.subscribers = {};
    }
  
    increment() {
      this.state.count += 1;
      this.notify('count');
    }
  
    decrement() {
      this.state.count -= 1;
      this.notify('count');
    }
  
    subscribe(property, callback) {
      if (!this.subscribers[property]) {
        this.subscribers[property] = [];
      }
      this.subscribers[property].push(callback);
    }
  
    notify(property) {
      if (this.subscribers[property]) {
        this.subscribers[property].forEach((callback) => callback(this.state[property]));
      }
    }
  }
  
  export const store = new SimpleStore();