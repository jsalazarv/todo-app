import {todoList} from "../../main";

const counter = document.querySelectorAll('.todo-count > strong');
const pending = document.querySelectorAll('.pending');
const completed = document.querySelectorAll('.completed');
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

    completed.forEach((complete) => {
        completedTasks.length === 0
            ? complete.classList.add('disabled')
            : complete.classList.remove('disabled');
    })

    allCompleted.forEach((item) => {
        completedTasks.length === 0
            ? item.classList.add('disabled')
            : item.classList.remove('disabled');
    });

    pending.forEach((active) => {
        pendingTasks.length === 0
            ? active.classList.add('disabled')
            : active.classList.remove('disabled');
    })
}


export default setCounter;
