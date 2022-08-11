import './styles.css';
import {Todo, TodoList} from './js/classes';
import {newTodoInput, taskCompleted, deleteTask, deleteCompletedTasks} from './js/events';
import {createTodo} from "./js/components/createTodo";


export const todoList = new TodoList();

todoList.todos.forEach(todo => createTodo(todo));

console.log("todos", todoList.todos)
