// Select elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add event listeners
addBtn.addEventListener("click", addTask);
taskList.addEventListener("click", deleteTask);

// Add a task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    const taskContent = document.createElement("span");
    const deleteButton = document.createElement("span");

    taskContent.classList.add("task");
    deleteButton.classList.add("delete");

    taskContent.innerText = taskText;
    deleteButton.innerText = "Delete";

    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = "";
    taskInput.focus();
  }
}

// Delete a task
function deleteTask(e) {
  if (e.target.classList.contains("delete")) {
    const taskItem = e.target.parentNode;
    taskList.removeChild(taskItem);
  }
}