import {makeAutoObservable} from 'mobx';

class MobxClicker {
    count = 0;

    constructor() {
        makeAutoObservable(this);
    }

    actionClick = () => {
        this.setCount(++this.count);
    }

    setCount = value => {
        this.count = value;
    }

    get doubleCount() {
        return (this.count ?? 0) * 2;
    }
}

export const mobxClicker = new MobxClicker();