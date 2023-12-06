function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="completeTask(this)">Complete</button>
        <button onclick="deleteTask(this)">Delete</button>
        `;
        
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}


function completeTask(button) {
    const taskText = button.parentElement.querySelector("span");
    taskText.classList.toggle("completed");
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
