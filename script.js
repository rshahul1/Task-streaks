function loadTasks() {
    var tasks = localStorage.getItem("tasks");
    if (tasks) {
        tasks = JSON.parse(tasks);
        var taskList = document.getElementById("taskList");
        taskList.innerHTML = '';
        tasks.forEach(function(task, index) {
            var li = document.createElement("li");
            li.textContent = task;
            
            // Create toggle button
            var toggleButton = document.createElement("button");
            toggleButton.textContent = "Toggle";
            toggleButton.onclick = function() {
                toggleTask(index);
            };

            li.appendChild(toggleButton);
            taskList.appendChild(li);
        });
    }
}

function toggleTask(index) {
    var tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks[index] = tasks[index].startsWith("✓") ? tasks[index].substring(2) : "✓ " + tasks[index];
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}

function increaseDayCount() {
    var dayCountElement = document.getElementById("dayCount");
    var dayCount = parseInt(dayCountElement.textContent);
    dayCountElement.textContent = dayCount + 1;
}

// Load tasks on Task List page load
window.onload = loadTasks;