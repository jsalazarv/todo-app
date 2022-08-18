import {todoList} from "../../index";
import setCounter from "./pendingTasks";


const deleteTask = document.querySelector('.todo-list');

deleteTask.addEventListener('click', (event) => {
    const item = event.target.parentElement.parentElement;
    const clickedElement  = event.target.localName;
    const itemId = item.getAttribute('data-id');

    if(clickedElement.includes('button')) {
        todoList.deleteTodo(itemId);
        deleteTask.removeChild(item);
        setCounter();
    }
});

export default deleteTask;
