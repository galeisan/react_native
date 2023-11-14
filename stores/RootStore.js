import React from "react";
import {ClickerStore} from "./ClickerStore";
import {TodoStore} from "./TodoStore";
import {CommentsStore} from "./CommentsStore";

class RootStore {
    clickerStore;
    todoStore;
    commentsStore;

    constructor() {
        this.clickerStore = new ClickerStore();
        this.todoStore = new TodoStore();
        this.commentsStore = new CommentsStore();
    }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
