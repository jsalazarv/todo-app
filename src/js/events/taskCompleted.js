import {todoList} from "../../index";


const taskCompleted = document.querySelector('.todo-list');

taskCompleted.addEventListener('click', (event) => {
    const item = event.target.parentElement.parentElement;
    const clickedElement  = event.target.localName;
    const itemId = item.getAttribute('data-id');

    if(clickedElement.includes('input')) {
        todoList.todoStatus(itemId);
        item.classList.toggle('completed');
    }
});

export default taskCompleted;
