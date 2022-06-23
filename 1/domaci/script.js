function  addItem() {
    let taskInput = document.querySelector('#taskInput');
    let tasksSection = document.querySelector('.tasks-section');

    if (taskInput.value === '') {
        alert("You must type something...");
    } else {
        let taskContainer = document.createElement('div');
        taskContainer.className = 'task-container';
    
        let task = document.createElement('p');
        task.className = 'task';
        task.innerText = taskInput.value; // Dodeljujemo vrednost iz inputa
    
        // Listener za markDoneItem funkciju
        task.addEventListener('click', markDoneItem);
    
        let closeBtn = document.createElement('span');
        closeBtn.className = 'close-btn';
        closeBtn.innerText = 'X';
    
        // Listener za removeItem funkciju
        closeBtn.addEventListener('click', removeItem);
    
        taskContainer.appendChild(task);
        taskContainer.appendChild(closeBtn);
    
        tasksSection.appendChild(taskContainer);
    
        // Cistimo input polje
        taskInput.value = '';
    }

}

function markDoneItem(e) {
    let taskTarget = e.target;

    if (taskTarget.style.textDecoration === 'line-through') {
        taskTarget.style.textDecoration = 'initial';
    } else {
        taskTarget.style.textDecoration = 'line-through';
    }
}

function removeItem(e) {
    let targetCloseButton = e.target;
    targetCloseButton.parentElement.remove();
}
