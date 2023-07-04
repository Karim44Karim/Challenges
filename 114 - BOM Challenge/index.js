let btn = document.querySelector("[type='submit']");
let inputField = document.querySelector("[type='text']");
let tasksContainer = document.getElementsByClassName("tasksContainer")[0];
let taskDeleteBtn = document.getElementsByClassName("delete")[0];


btn.addEventListener("click", ()=> {
    if (inputField.value != "") {
        let taskText = document.createTextNode(inputField.value);
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        let taskTextDiv = document.createElement("div");
        taskTextDiv.appendChild(taskText);
        taskTextDiv.classList.add("taskText");
    
        let taskDeleteBtn = document.createElement("input");
        taskDeleteBtn.classList.add("delete");
        taskDeleteBtn.setAttribute("type","submit");
        taskDeleteBtn.setAttribute("value","delete");
        taskDeleteBtn.addEventListener("click", ()=> {
            let taskToDelete = taskDeleteBtn.parentElement;
            while (taskToDelete.children.length > 0) {
                taskToDelete.firstElementChild.remove();
            }
            taskToDelete.remove();
        })
    
        taskDiv.appendChild(taskTextDiv);
        taskDiv.appendChild(taskDeleteBtn);
    
        tasksContainer.appendChild(taskDiv);
        inputField.value = ""; 
    }

    else {
        alert("Please enter the task name.");
    }

});

