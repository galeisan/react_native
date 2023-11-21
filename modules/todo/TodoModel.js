export class TodoModel {
    todoList: ToDo[];
}

export type ToDo = {
    text: string;
    index: number;
    completed: boolean;
};

