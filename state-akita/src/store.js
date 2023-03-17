import { createStore } from "@ngneat/elf";
const store = createStore({ name: "todoStore" }, { todos: [] });
export default store;
