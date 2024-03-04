        document.addEventListener("DOMContentLoaded", function () {
            var addTaskBtn = document.getElementById("add-task-btn");
            addTaskBtn.addEventListener("click", function (event) {
                event.preventDefault();
                addTask();
                displayResults();
            });
        });

        var taskCount = 0;

        function addTask() {
            const taskNameInput = document.getElementById("task-name");
            const taskPrioritySelect = document.getElementById("task-priority");
            const taskDateInput = document.getElementById("task-date");
            const taskList = document.getElementById("task-list");

            const name = taskNameInput.value.trim();
            const location = document.getElementById("Local").value.trim();
            const priority = taskPrioritySelect.value;
            const date = taskDateInput.value;
            const startTime = document.getElementById("start-time").value;
            const endTime = document.getElementById("end-time").value;
            const notes = document.getElementById("Notas").value;

            if (name !== "" && date !== "") {
                taskCount++;

                const taskItem = document.createElement("li");
                taskItem.className = "task-item";
                const taskText = `
                    <input type="checkbox" class="task-checkbox" id="task-checkbox-${taskCount}">
                    <p>${taskCount} - <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;Atividade: ${name};<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;Local: ${location};<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;Prioridade: ${priority};<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;Data: ${date};<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;Hora de Início: ${startTime};<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;Hora de Término: ${endTime};<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;Descrição: ${notes};<br>
                    </p>
                `;
                taskItem.innerHTML = taskText;
                taskList.appendChild(taskItem);

                taskNameInput.value = "";
                document.getElementById("Local").value = "";
                taskPrioritySelect.value = "alto";
                taskDateInput.value = "";
                document.getElementById("start-time").value = "";
                document.getElementById("end-time").value = "";
                document.getElementById("Notas").value = "";
            }
        }

        function displayResults() {
            const taskList = document.getElementById("task-list");
            const tasks = taskList.querySelectorAll(".task-item");

            if (tasks.length > 0) {
                let resultsText = "Tarefas Agendadas:\n";

                tasks.forEach((task, index) => {
                    resultsText += `${task.textContent}\n`;
                });

                alert(resultsText);
            }
        }

        function markAllCompleted() {
            const checkboxes = document.querySelectorAll('.task-checkbox');
            checkboxes.forEach(checkbox => {
                checkbox.checked = true;
            });
        }
  