class SimpleStore {
  constructor() {
    this.count = 0;
    this.subscribers = {};
  }

  increment() {
    this.count += 1;
    //this.notify("count");
  }

  decrement() {
    this.count -= 1;
    //this.notify("count");
  }

  subscribe(property, callback) {
    if (!this.subscribers[property]) {
      this.subscribers[property] = [];
    }
    this.subscribers[property].push(callback);
  }

  notify(property) {
    if (this.subscribers[property]) {
      this.subscribers[property].forEach((callback) =>
        callback(this.state[property])
      );
    }
  }

  set count(cnt) {
    console.log("setting count")
    this.count = cnt;
    //this.notify("count");
  }

  get count(){
    console.log("getting count")
    return this.count;
  }
  
}

export const store = new SimpleStore();
