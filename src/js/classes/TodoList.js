export class TodoList {
    constructor() {
        this.todos = [];
    }

    newTodo(task) {
        this.todos.push(task);
    }

    deleteTodo(id) {}

    todoStatus(id) {
        for (const todo of this.todos) {
            console.log(id, todo);

            if(todo.id === parseInt(id)) {
                todo.completed = !todo.completed;
                break;
            }
        }
    }

    deleteCompletedTodo() {}
}
