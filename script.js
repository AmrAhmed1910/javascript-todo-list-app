function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const todoTasks = document.getElementById('todo-tasks');
        const newTask = createTaskElement(taskText);
        todoTasks.appendChild(newTask);
        taskInput.value = '';
    }
}

function createTaskElement(taskText) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    editButton.onclick = () => editTask(editButton);
    li.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.onclick = () => deleteTask(deleteButton);
    li.appendChild(deleteButton);

    const finishButton = document.createElement('button');
    finishButton.textContent = 'Finish';
    finishButton.classList.add('finish');
    finishButton.onclick = () => finishTask(finishButton);
    li.appendChild(finishButton);

    return li;
}

function editTask(button) {
    const li = button.parentElement;
    const span = li.querySelector('span');
    const newText = prompt('Edit task:', span.textContent);

    if (newText !== null && newText.trim() !== '') {
        span.textContent = newText;
    }
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}

function finishTask(button) {
    const li = button.parentElement;
    li.classList.add('finished');
    document.getElementById('finished-tasks').appendChild(li);
    button.remove();
}
