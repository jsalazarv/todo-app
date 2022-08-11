export class TodoList {
    constructor() {
        this.loadLocalStorage();
    }

    newTodo(task) {
        this.todos.push(task);
        this.saveToLocalStorage();
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
        this.saveToLocalStorage();
    }

    todoStatus(id) {
        for (const todo of this.todos) {
            if(todo.id === parseInt(id)) {
                todo.completed = !todo.completed;
                this.saveToLocalStorage();
                break;
            }
        }
    }

    deleteCompletedTodo() {
        this.todos = this.todos.filter(todo => !todo.completed);
        this.saveToLocalStorage();
    }

    saveToLocalStorage() {
        localStorage.setItem("todos", JSON.stringify(this.todos));
    }

    loadLocalStorage() {
        this.todos = (localStorage.getItem("todos"))
            ? JSON.parse(localStorage.getItem("todos"))
            : [];
    }
}
