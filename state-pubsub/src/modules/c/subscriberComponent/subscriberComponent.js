import { LightningElement, track } from 'lwc';
import { eventBus } from 'eventBus';

export default class SubscriberComponent extends LightningElement {
  @track message = '';

  connectedCallback() {
    eventBus.subscribe('sampleEvent', this.handleSampleEvent.bind(this));
  }

  disconnectedCallback() {
    eventBus.unsubscribe('sampleEvent', this.handleSampleEvent.bind(this));
  }

  handleSampleEvent(data) {
    this.message = data.message;
  }
}