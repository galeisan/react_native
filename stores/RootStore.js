import React from "react";
import {ClickerStore} from "./ClickerStore";

class RootStore {
    clickerStore;

    constructor() {
        this.clickerStore = new ClickerStore();
    }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);