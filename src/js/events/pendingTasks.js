import {todoList} from "../../index";


const counter = document.querySelector('.todo-count > strong');

const setCounter = () => {
    let pendingTasks = todoList.todos.filter((todo) => {
        if (!todo.completed) return todo;
    });

    counter.innerHTML = pendingTasks.length;
}


export default setCounter;
