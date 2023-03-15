import { LightningElement } from "lwc";

export default class HelloWorldApp extends LightningElement {
  clickedButtonLabel;

  handleClick(event) {
    this.clickedButtonLabel = event.target.label;
    console.log(event.target.label)
  }
}
