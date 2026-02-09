const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');
const darkMode = document.querySelector('#modeToggle');

addBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const createList = document.createElement("li");
    createList.innerHTML = `
        <span>${taskText}</span>
        <button onclick="deleteTask(this)" class="delete-btn">🗑</button>
    `;

    taskList.appendChild(createList);
    taskInput.value = "";
}

function deleteTask(btn) {
    btn.parentElement.remove();
}

darkMode.addEventListener('click', () => {
    document.body.classList.toggle("dark");
    darkMode.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});
