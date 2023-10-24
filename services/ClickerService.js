import ClickerRepository from "../repositories/ClickerRepository";
import { ClickerModel } from '../models/ClickerModel';

export default class ClickerService {
    clickerRepository;

    constructor() {
        this.clickerRepository = new ClickerRepository();
    }

    getAndPrepareDataForStore = () => {
        const data = this.clickerRepository.getDataFromExternalStorage();


        const model = new ClickerModel();
        model.count = data.defaultCount;

        return model;
    }

    incrementCountValue = model => {
        model.count++;
        return model;
    }
}