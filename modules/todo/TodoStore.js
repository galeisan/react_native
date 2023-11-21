import {makeAutoObservable} from "mobx";
import TodoService from "./TodoService";

export class TodoStore {
    todoModel = null;

    isLoading = false;

    todoService;

    constructor() {
        makeAutoObservable(this);
        this.todoService = new TodoService();
    }

    getTodoObjectFromService = () => {
        const model = this.todoService.getAndPrepareDataForStore();
        this.setTodoModel(model);
    }

    actionGetCompleted = () => {
        const completed = this.todoService.getCompletedTodo(this.todoModel);
        console.log(completed)
        return completed;
    }


    actionAdd = (value) => {
        this.setIsLoading(true);
        const model = this.todoService.addTodo(this.todoModel, value);
        this.setTodoModel(model);
        this.setIsLoading(false)
    };

    actionChange = (index) => {
        this.setIsLoading(true);

        const model = this.todoService.changeTodo(this.todoModel, index);
        this.setTodoModel(model);
        this.setIsLoading(false)

    };


    actionDelete = (index) => {
        this.setIsLoading(true);
        const model = this.todoService.deleteTodo(this.todoModel, index);
        this.setTodoModel(model);
        this.setIsLoading(false)
    };

    setTodoModel = value => {
        this.todoModel = value;
    }

    setIsLoading = value => {
        this.isLoading = value;
    }

}
