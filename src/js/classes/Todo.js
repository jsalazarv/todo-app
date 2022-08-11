export class Todo {
    static fromJson({id, task, completed, creationDate}) {
        const temporalTodo = new Todo(task);

        temporalTodo.id = id;
        temporalTodo.completed = completed;
        temporalTodo.creationDate = creationDate

        return temporalTodo;
    }


    constructor(task) {
        this.task = task;
        this.id = new Date().getTime();
        this.completed = false;
        this.creationDate = new Date();
    }
}
