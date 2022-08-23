import {todoList} from "../../main";

const counter = document.querySelectorAll('.todo-count > strong');
const pending = document.querySelector('.pending');
const completed = document.querySelector('.completed');
const allCompleted = document.querySelectorAll('.clear-completed');

const setCounter = () => {
    let pendingTasks = todoList.todos.filter((todo) => {
        if (!todo.completed) return todo;
    });

    counter.forEach((item) => {
        item.innerHTML = pendingTasks.length;
    });
}

export const disabledFilters = () => {
    let completedTasks = todoList.todos.filter((todo) => {
        if (todo.completed) return todo;
    });

    let pendingTasks = todoList.todos.filter((todo) => {
        if (!todo.completed) return todo;
    });

    completedTasks.length === 0
        ? completed.classList.add('disabled')
        : completed.classList.remove('disabled');

    allCompleted.forEach((item) => {
        completedTasks.length === 0
            ? item.classList.add('disabled')
            : item.classList.remove('disabled');
    });

    pendingTasks.length === 0
        ? pending.classList.add('disabled')
        : pending.classList.remove('disabled');
}


export default setCounter;
