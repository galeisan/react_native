import React from "react";
import {ClickerStore} from "../modules/clicker/ClickerStore";
import {TodoStore} from "../modules/todo/TodoStore";
import {CommentsStore} from "../modules/comment/CommentsStore";

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
