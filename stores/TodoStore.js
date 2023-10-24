import {makeAutoObservable} from "mobx";
import TodoService from "../services/TodoService";

export class TodoStore {
    todoEntity = null;

    isLoading = false;

    todoService;

    constructor() {
        makeAutoObservable(this);
        this.todoService = new TodoService();
    }

    getTodoObjectFromService = () => {
        const model = this.todoService.getAndPrepareDataForStore();
        this.setTodoEntity(model);
    }

    actionGetCompleted = (model) => {
        return this.todoService.getCompletedTodo(model);
    }

    actionAdd = (value) => {
        this.setIsLoading(true);
        const model = this.todoService.addTodo(this.todoEntity, value);
        this.setTodoEntity(model);
        this.setIsLoading(false)
    };

    actionChange = (index) => {
        this.setIsLoading(true);

        const model = this.todoService.changeTodo(this.todoEntity, index);
        this.setTodoEntity(model);
        this.setIsLoading(false)

    };


    actionDelete = (index) => {
        this.setIsLoading(true);
        const model = this.todoService.deleteTodo(this.todoEntity, index);
        this.setTodoEntity(model);
        this.setIsLoading(false)
    };

    setTodoEntity = value => {
        this.todoEntity = value;
    }

    setIsLoading = value => {
        this.isLoading = value;
    }
}