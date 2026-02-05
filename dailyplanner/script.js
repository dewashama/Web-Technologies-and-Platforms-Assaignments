const taskName = document.getElementById('task-name');
const taskTime = document.getElementById('task-time');
const taskPriority = document.getElementById('task-priority');
const taskList = document.getElementById('task-list');
const addBtn = document.getElementById('add-task');

let editItem = null;

addBtn.onclick = function() {
  const name = taskName.value.trim();
  const time = taskTime.value;
  const priority = taskPriority.value;

  if (!name) { alert('Enter task'); return; }

  if (editItem) {
    // Update existing task
    editItem.querySelector('.task-text').textContent =
      `${name} ${time ? '('+time+')' : ''} [${priority}]`;
    editItem = null;
    addBtn.textContent = 'Add Task';
  } else {
    // Add new task
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" onclick="this.nextSibling.style.textDecoration = this.checked ? 'line-through' : 'none'">
      <span class="task-text">${name} ${time ? '('+time+')' : ''} [${priority}]</span>
      <button class="edit-btn">Edit</button>
      <button onclick="this.parentNode.remove()">Delete</button>
    `;
    // Edit button logic
    li.querySelector('.edit-btn').onclick = function() {
      editItem = li;
      taskName.value = name;
      taskTime.value = time;
      taskPriority.value = priority;
      addBtn.textContent = 'Update Task';
    }
    taskList.appendChild(li);
  }

  // Reset inputs
  taskName.value = '';
  taskTime.value = '';
  taskPriority.value = 'Medium';
};
