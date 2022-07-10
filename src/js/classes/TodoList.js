export class TodoList {
    constructor() {
        this.todos = [];
    }

    newTodo(task) {
        this.todos.push(task);
    }

    deleteTodo(id) {}

    todoStatus(id) {}

    deleteCompletedTodo() {}
}
