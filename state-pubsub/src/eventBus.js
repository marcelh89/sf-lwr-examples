class EventBus {
  constructor() {
    this.listeners = {};
  }

  subscribe(eventName, callback) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(callback);
  }

  unsubscribe(eventName, callback) {
    if (this.listeners[eventName]) {
      this.listeners[eventName] = this.listeners[eventName].filter(
        (listener) => listener !== callback
      );
    }
  }

  publish(eventName, data) {
    if (this.listeners[eventName]) {
      this.listeners[eventName].forEach((callback) => callback(data));
    }
  }
}

export const eventBus = new EventBus();
