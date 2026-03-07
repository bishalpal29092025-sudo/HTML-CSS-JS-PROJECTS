const addTodoBtn = document.getElementById("addTodoBtn");

let draggedTask = null;

document.addEventListener("DOMContentLoaded", loadTasks);

addTodoBtn.addEventListener("click", () => {
  addTask("todo");
});

function addTask(column) {

  const input = document.getElementById(`${column}-input`);
  const text = input.value.trim();

  if (text === "") return;

  createTaskElement(text, column);

  input.value = "";

  saveTasks();
  updateCounters();
}

function createTaskElement(text, column) {

  const task = document.createElement("div");
  task.classList.add("task");
  task.setAttribute("draggable", "true");

  const span = document.createElement("span");
  span.textContent = text;

  const buttons = document.createElement("div");
  buttons.classList.add("task-buttons");

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏";

  editBtn.addEventListener("click", () => {

    const newText = prompt("Edit task:", span.textContent);

    if (newText && newText.trim() !== "") {
      span.textContent = newText.trim();
      saveTasks();
    }

  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";

  deleteBtn.addEventListener("click", () => {
    task.remove();
    saveTasks();
    updateCounters();
  });

  buttons.appendChild(editBtn);
  buttons.appendChild(deleteBtn);

  task.appendChild(span);
  task.appendChild(buttons);

  document
    .getElementById(column)
    .appendChild(task);

  addDragEvents(task);
}

function addDragEvents(task) {

  task.addEventListener("dragstart", () => {
    draggedTask = task;
  });

  task.addEventListener("dragend", () => {
    draggedTask = null;
  });
}

document.querySelectorAll(".task-list").forEach((list) => {

  list.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  list.addEventListener("dragenter", function () {
    this.classList.add("drag-over");
  });

  list.addEventListener("dragleave", function () {
    this.classList.remove("drag-over");
  });

  list.addEventListener("drop", function () {

    this.classList.remove("drag-over");

    if (draggedTask) {
      this.appendChild(draggedTask);

      saveTasks();
      updateCounters();
    }
  });
});

function saveTasks() {

  const data = {
    todo: [],
    doing: [],
    done: []
  };

  document
    .querySelectorAll("#todo .task span")
    .forEach(task => data.todo.push(task.textContent));

  document
    .querySelectorAll("#doing .task span")
    .forEach(task => data.doing.push(task.textContent));

  document
    .querySelectorAll("#done .task span")
    .forEach(task => data.done.push(task.textContent));

  localStorage.setItem(
    "kanbanData",
    JSON.stringify(data)
  );
}

function loadTasks() {

  const data =
    JSON.parse(localStorage.getItem("kanbanData"));

  if (!data) return;

  data.todo.forEach(text =>
    createTaskElement(text,"todo")
  );

  data.doing.forEach(text =>
    createTaskElement(text,"doing")
  );

  data.done.forEach(text =>
    createTaskElement(text,"done")
  );

  updateCounters();
}

function updateCounters() {

  document.getElementById("todo-count").textContent =
    document.querySelectorAll("#todo .task").length;

  document.getElementById("doing-count").textContent =
    document.querySelectorAll("#doing .task").length;

  document.getElementById("done-count").textContent =
    document.querySelectorAll("#done .task").length;
}