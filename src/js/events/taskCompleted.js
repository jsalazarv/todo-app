import {todoList} from "../../index";
import setCounter, {disabledFilters} from "./pendingTasks";


const taskCompleted = document.querySelector('.todo-list');

taskCompleted.addEventListener('click', (event) => {
    const item = event.target.parentElement.parentElement;
    const clickedElement  = event.target.localName;
    const itemId = item.getAttribute('data-id');

    if(clickedElement.includes('input')) {
        todoList.todoStatus(itemId);
        item.classList.toggle('completed');
        setCounter();
        disabledFilters();
    }
});

export default taskCompleted;
