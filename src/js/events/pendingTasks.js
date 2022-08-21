import {todoList} from "../../main";

const counter = document.querySelector('.todo-count > strong');
const pending = document.querySelector('.pending');
const completed = document.querySelector('.completed');
const allCompleted = document.querySelector('.clear-completed');

const setCounter = () => {
    let pendingTasks = todoList.todos.filter((todo) => {
        if (!todo.completed) return todo;
    });

    counter.innerHTML = pendingTasks.length;
}

export const disabledFilters = () => {
    let completedTasks = todoList.todos.filter((todo) => {
        if (todo.completed) return todo;
    });

    let pendingTasks = todoList.todos.filter((todo) => {
        if (!todo.completed) return todo;
    });

    completedTasks.length === 0 ? completed.classList.add('disabled') : completed.classList.remove('disabled');
    completedTasks.length === 0 ? allCompleted.classList.add('disabled') : allCompleted.classList.remove('disabled');
    pendingTasks.length === 0 ? pending.classList.add('disabled') : pending.classList.remove('disabled');
}


export default setCounter;
