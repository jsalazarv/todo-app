import {Todo} from "../classes";
import {todoList} from "../../index";
import {createTodo} from "../components/createTodo";


const newTodoInput = document.querySelector('.new-todo');

newTodoInput.addEventListener('keyup', (event) => {
    if(event.keyCode === 13 && newTodoInput.value.length > 0){
        const todo = new Todo(newTodoInput.value);

        todoList.newTodo(todo)
        createTodo(todo);
        newTodoInput.value = "";
    }
});


export default newTodoInput;
