import {makeAutoObservable} from "mobx";
import TodoService from "../services/TodoService";

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

    actionGetCompleted = (model) => {
        return this.todoService.getCompletedTodo(model);
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

// import {makeAutoObservable} from "mobx";
// import ToDoService from "../services/ToDoService";
//
// export class ToDoStore {
//     todoModel = null
//
//     isLoading = false;
//
//     todoService;
//
//     constructor() {
//         makeAutoObservable(this);
//         this.todoService = new ToDoService();
//     }
//
//     getToDoObjectFromService = () => {
//         const model = this.todoService.getAndPrepareDataForStore();
//         this.setToDoModel(model);
//     }
//
//     actionGetCompleted = () => {
//         const completed = this.todoService.getCompletedToDo(this.todoModel);
//         console.log(completed)
//         return completed;
//     }
//
//     actionAdd = (value) => {
//         this.setIsLoading(true)
//         const model = this.todoService.addToDo(this.todoModel, value)
//         this.setToDoModel(model)
//         console.log(this.todoModel)
//         this.setIsLoading(false)
//     };
//
//     actionChange = (index) => {
//         this.setIsLoading(true);
//         const model = this.todoService.changeToDo(this.todoModel, index);
//         this.setToDoModel(model);
//         console.log(this.todoModel)
//         this.setIsLoading(false)
//     };
//
//
//     actionDelete = (index) => {
//         this.setIsLoading(true);
//         const model = this.todoService.deleteToDo(this.todoModel, index);
//         this.setToDoModel(model);
//         console.log(this.todoModel)
//         this.setIsLoading(false)
//     };
//
//     setToDoModel = value => {
//         this.todoModel = value;
//     }
//
//     setIsLoading = value => {
//         this.isLoading = value;
//     }
// }