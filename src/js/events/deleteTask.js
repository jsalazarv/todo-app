import {todoList} from "../../index";


const deleteTask = document.querySelector('.todo-list');

deleteTask.addEventListener('click', (event) => {
    const item = event.target.parentElement.parentElement;
    const clickedElement  = event.target.localName;
    const itemId = item.getAttribute('data-id');

    if(clickedElement.includes('button')) {
        todoList.deleteTodo(itemId);
        deleteTask.removeChild(item);
    }
});

export default deleteTask;
