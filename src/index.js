document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskListArray = []; //created an empty array

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload/refresshing?

    const newTaskInput = document.getElementById("new-task-description");
    const newTaskDescription = newTaskInput.value.trim();

    if (newTaskDescription) {
      taskListArray.push(newTaskDescription); // we are pushing the task to the new array
      updateToDoList(); // from the iterating loop
    } else {
      console.log("Task description cannot be empty!");
    }
    newTaskInput.value = ""; //a code to clear the input value/field
  });

  function updateToDoList() {
    const toDoList = document.getElementById("tasks");
    toDoList.innerHTML = ""; //a code to clear the tasks b4 adding a new one
    //iterating using the foreach
    taskListArray.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = task;
      //create a cancel button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Cancel";

      deleteButton.addEventListener("click", () => {
        li.remove();
      });

      if (priority.li == "high") {
        li.textContent = "red";
      }

      li.appendChild(deleteButton);

      toDoList.appendChild(li);
    });
  }
});
