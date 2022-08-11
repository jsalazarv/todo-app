export class TodoList {
    constructor() {
        this.todos = [];
    }

    newTodo(task) {
        this.todos.push(task);
        console.log("[NEW]", this.todos);
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
        console.log("[REMOVED]", this.todos);
    }

    todoStatus(id) {
        for (const todo of this.todos) {
            if(todo.id === parseInt(id)) {
                todo.completed = !todo.completed;
                break;
            }
        }
        console.log("[STATUSES]", this.todos);
    }

    deleteCompletedTodo() {}
}
