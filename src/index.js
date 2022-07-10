import './styles.css';
import {Todo, TodoList} from './js/classes';


const todoList = new TodoList();
const todo = new Todo("Aprender Javascript");

todoList.newTodo(todo);
console.log(todoList);
