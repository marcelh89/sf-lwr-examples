import { LightningElement, api } from 'lwc';
import { createStore } from 'redux';
import { counterReducer } from './reducers';

export default class Counter extends LightningElement {
    @api store;
    count = 0;
    unsubscribe;

    connectedCallback() {
        this.store = createStore(counterReducer);
        this.unsubscribe = this.store.subscribe(() => {
            const state = this.store.getState();
            this.count = state.count;
        });
    }

    disconnectedCallback() {
        this.unsubscribe();
    }

    handleIncrement() {
        this.store.dispatch({ type: 'INCREMENT' });
    }

    handleDecrement() {
        this.store.dispatch({ type: 'DECREMENT' });
    }
}