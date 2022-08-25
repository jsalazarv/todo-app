import {Todo} from "../classes";
import {todoList} from "../../main";
import {createTodo} from "../components/createTodo";
import setCounter from "./pendingTasks";


const newTodoInput = document.querySelector('.new-todo');

newTodoInput.addEventListener('keyup', (event) => {
    if(event.keyCode === 13 && newTodoInput.value.length > 0){
        const todo = new Todo(newTodoInput.value);

        todoList.newTodo(todo)
        createTodo(todo);
        newTodoInput.value = "";
        setCounter();
    }
});


export default newTodoInput;
