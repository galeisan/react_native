import React from "react";
import {ClickerStore} from "./ClickerStore";
import {TodoStore} from "./TodoStore";

class RootStore {
    clickerStore;
    todoStore;

    constructor() {
        this.clickerStore = new ClickerStore();
        this.todoStore = new TodoStore();
    }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
