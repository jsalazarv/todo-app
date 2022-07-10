import './styles.css';
import {Todo, TodoList} from './js/classes';
import {createTodo} from "./js/components/createTodo";


const todoList = new TodoList();
const todo = new Todo("Aprender Javascript");

todoList.newTodo(todo);
console.log(todoList);

createTodo(todo);
