// import TodoRepository from "../repositories/TodoRepository";
// import {TodoModel} from "../models/TodoModel";
//
// export default class TodoService {
//     todoRepository;
//
//     constructor() {
//         this.todoRepository = new TodoRepository();
//     }
//
//     getAndPrepareDataForStore = () => {
//         const data = this.todoRepository.getDataFromExternalStorage();
//
//         const model = new TodoModel();
//         model.todoList = data.defaultTodoList;
//
//         return model;
//     }
//
//     addTodo = (model, value) => {
//         model.todoList.push(value);
//         return model;
//     }
//
//     deleteTodo = (model, index) => {
//         model.todoList.splice(index, 1)
//         return model;
//     }
//
//     changeTodo = (model, index) => {
//         model.todoList[index].completed = !model.todoList[index].completed;
//         return model;
//     }
//
//     getCompletedTodo = (model) => {
//         return model.filter((item) => item.completed);
//     }
// }

import TodoRepository from "../repositories/TodoRepository";
import {TodoModel} from "../models/TodoModel";
import type {ToDo} from "../models/TodoModel";

export default class ToDoService {
    todoRepository;

    constructor() {
        this.todoRepository = new TodoRepository();
    }

    getAndPrepareDataForStore = () => {
        const data = this.todoRepository.getDataFromExternalStorage();

        const model = new TodoModel();
        model.todoList = data.defaultTodoList;

        return model;
    }

    addTodo = (model, value) => {
        model.todoList.push(value);
        return model;
    }

    deleteTodo = (model, index) => {
        model.todoList.splice(index, 1)
        return model;
    }

    changeTodo = (model, index) => {
        model.todoList[index].completed = !model.todoList[index].completed;
        return model;
    }

    getCompletedTodo = (model) => {
        return model.todoList.filter((item: ToDo) => item.completed);
    }
}