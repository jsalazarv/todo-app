import './index.css';
import './css/checkbox.css';
import './css/footer.css';

import {Todo, TodoList} from './js/classes';
import {newTodoInput, taskCompleted, deleteTask, deleteCompletedTasks, filters} from './js/events';
import {createTodo} from "./js/components/createTodo";
import setCounter, {disabledFilters} from "./js/events/pendingTasks";


export const todoList = new TodoList();

todoList.todos.forEach(todo => createTodo(todo));
setCounter();
disabledFilters();