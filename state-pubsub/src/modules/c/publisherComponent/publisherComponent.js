import { LightningElement } from 'lwc';
import { eventBus } from 'eventBus';

export default class PublisherComponent extends LightningElement {
  handleButtonClick() {
    const data = { message: 'Hello from the publisher component!' };
    eventBus.publish('sampleEvent', data);
  }
}
