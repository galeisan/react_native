// import TodoRepository from "./TodoRepository";
// import {TodoEntity} from "./TodoEntity";

import TodoRepository from "../repositories/TodoRepository";
import {TodoEntity} from "../models/TodoEntity";

export default class TodoService {
    todoRepository;

    constructor() {
        this.todoRepository = new TodoRepository();
    }

    getAndPrepareDataForStore = () => {
        const data = this.todoRepository.getDataFromExternalStorage();

        const model = new TodoEntity();
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
        return model.filter((item) => item.completed);
    }
}