import './styles.css';
import {Todo, TodoList} from './js/classes';
import {newTodoInput, taskCompleted, deleteTask, deleteCompletedTasks, filters} from './js/events';
import {createTodo} from "./js/components/createTodo";
import setCounter from "./js/events/pendingTasks";


export const todoList = new TodoList();

todoList.todos.forEach(todo => createTodo(todo));
setCounter();