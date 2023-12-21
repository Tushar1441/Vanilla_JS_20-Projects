const push = document.getElementById("push-btn");
const tasks = document.getElementById("tasks");
const newtask = document.querySelector("#newtask input");

// Function to add a new task
function addNewTask() {
  if (newtask.value.length === 0) {
    alert("Please Enter a task");
  } else {
    tasks.innerHTML += `
        <div class="task">
            <span id="taskname">
                ${newtask.value}
            </span>
            <button class="delete-btn">
                <i class="far fa-trash-alt">
                </i>
            </button>
        </div>
    `;
    // Set up event listeners for delete buttons and task completion
    setEventListeners();

    // clearing the input field
    newtask.value = " ";
  }
}

// Function to set up event listeners for delete buttons and task completion
function setEventListeners() {
  var current_tasks = document.querySelectorAll(".delete-btn");
  for (var i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function () {
      this.parentNode.remove();
    };
  }

  var all_tasks = document.querySelectorAll(".task");
  for (var i = 0; i < all_tasks.length; i++) {
    all_tasks[i].onclick = function () {
      this.classList.toggle("completed");
    };
  }
}

// Event listener for the "push" button
push.onclick = addNewTask;

// Event listener for the input field to add a task on "Enter" key press
newtask.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addNewTask();
  }
});
