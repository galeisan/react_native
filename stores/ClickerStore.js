import { makeAutoObservable } from "mobx";
import ClickerService from "../services/ClickerService";

export class ClickerStore {

    clickerModel = null;

    isLoading = false;

    clickerService;

    constructor() {
        makeAutoObservable(this);

        this.clickerService = new ClickerService();
    }

    getClickerObjectFromService = () => {
        const model = this.clickerService.getAndPrepareDataForStore();
        this.setClickerModel(model);
    }

    actionClick = () => {
        this.setIsLoading(true);

        const model = this.clickerService.incrementCountValue(this.clickerModel);
        this.setClickerModel(model);

        setTimeout(() => {
            this.setIsLoading(false);
        },1000);
    }

    setClickerModel = value => {
        this.clickerModel = value;
    }

    setIsLoading = value => {
        this.isLoading = value;
    }

    // count = 0;
    //
    // constructor() {
    //     makeAutoObservable(this);
    // }
    //
    // actionClick = () => {
    //     this.setCount(++this.count);
    // }
    //
    // resetClick = () => {
    //     this.setCount(0);
    // }
    //
    // setCount = value => {
    //     this.count = value;
    // }
    //
    // get doubleCount() {
    //     return this.count * 2;
    // }
}