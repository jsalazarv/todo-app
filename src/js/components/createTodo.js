const todoList = document.querySelector('.todo-list');

export const createTodo = (todo) => {
    let completed = (todo.completed) ? 'completed' : '';
    let checked = (todo.completed) ? 'checked' : '';
    let id = todo.id;

    const htmlTodo = `
        <li class="${completed}" data-id="${id}">
            <div class="view">
                <input class="toggle" type="checkbox" ${checked}>
                <label>${todo.task}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
    `;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    todoList.append(div.firstElementChild);

    return div;
}
