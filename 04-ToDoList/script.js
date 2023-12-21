const push = document.getElementById("push-btn");
const tasks = document.getElementById("tasks");
const newtask = document.querySelector("#newtask input");

push.onclick = function () {
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
    
    // all the delete buttons will be stored in current_tasks
    var current_tasks = document.querySelectorAll(".delete-btn");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    // all tasks will be stored inside the all_tasks
    var all_tasks = document.querySelectorAll(".task");
    // crossing a completed task
    for (var i = 0; i < all_tasks.length; i++) {
      all_tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }

    // clearing the input field
    newtask.value = " ";
  }
};
