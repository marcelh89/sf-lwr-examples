# sf-lwr-examples
Salesforce Lightning Web Runtime / Lightning Web Component Examples

This is a collection of examples of using Lightning Web Runtime based on LWR documentation [here](https://developer.salesforce.com/docs/platform/lwr/guide/lwr-get-started.html)


### How to run (details see subdirectory README)
cd into subdirectory e.g.

`cd base-lwc-and-design-system`

`npm install`

`npm run dev`

or use yarn instead

`cd base-lwc-and-design-system`

`yarn`

`yarn dev`

### Examples:
- static-site-templates 
  - pure scaffold of `npm init lwr` with type "Static Site"
- spa-static-server-side-routing
  - scaffold of `npm init lwr` spa type "Single Page App"
  - applied SSR based on https://developer.salesforce.com/docs/platform/lwr/guide/lwr-routing-server.html 
- base-lwc-and-design-system
  - using salesforce desgin system https://developer.salesforce.com/docs/platform/lwr/guide/lwr-slds.html
  - using Base Lightning Web Components https://developer.salesforce.com/docs/platform/lwr/guide/lwr-lwc.html
- state-redux - state management with Redux
  - https://redux.js.org/
- state-elf - state management with Elf 
  - https://ngneat.github.io/elf/docs/store/
- state-pubsub
  - custom simple state implementation based on pub-sub pattern
- state-mobx
  - counter example using mobx state management https://github.com/mobxjs/mobx
- todoapp
  - using Custom Events for Child-Parent communication  

Not working
- jotai state management (or only partly working with vanilla js support)
- akita state management - not working due to annotations https://github.com/salesforce/akita
