import {todoList} from "../../main";
import {disabledFilters} from "./pendingTasks";


const deleteCompletedTasks = document.querySelector('.clear-completed');

deleteCompletedTasks.addEventListener('click', () => {
    const taskList = document.querySelector(".todo-list");

    for (let index = taskList.children.length -1; index >= 0; index--) {
        const element = taskList.children[index];

        if(element.classList.contains("completed")) {
            taskList.removeChild(element);
        }
    }

    todoList.deleteCompletedTodo();
    disabledFilters();
});

export default deleteCompletedTasks;
