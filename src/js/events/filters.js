const todoListContainer = document.querySelector('.todo-list');
const filters = document.querySelector('.filters');
const btnFilter = document.querySelectorAll('.filter');


filters.addEventListener('click', (event) => {
    const filter = event.target.text;

    if(!filter) return;

    btnFilter.forEach(element => element.classList.remove('selected'));
    event.target.classList.add('selected');

    for(const element of todoListContainer.children) {
        element.classList.remove('hidden');
        const taskCompleted = element.classList.contains('completed');

        switch (filter) {
            case 'Pendientes':
                taskCompleted && element.classList.add('hidden');
                break;
            case 'Completados':
                !taskCompleted && element.classList.add('hidden');
                break;

        }
    }
});

export default filters;