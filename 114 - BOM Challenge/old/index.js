let btn = document.querySelector("[type='submit']");
let inputField = document.querySelector("[type='text']");
let tasksContainer = document.getElementsByClassName("tasksContainer")[0];
let taskDeleteBtn = document.getElementsByClassName("delete")[0];
const memory = {};
let Id = 1;


// get storage
try {
    if (localStorage.memory) {
        let obj = JSON.parse(localStorage.memory) ?? {};
        Object.values(obj).forEach(createTask);
    }
} catch (error) {
    
}

btn.addEventListener("click", ()=> {
        createTask(inputField.value);
        //######## local storage ########
        //Reset input field 
        inputField.value = ""; 

    })


function updateLocalStorage() {
    localStorage.setItem("memory",JSON.stringify(memory))
}

function createTask(task) {
    
    let taskText = document.createTextNode(task);

    if (inputField.value != "") {
        
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

        // Append to memory
        memory[Id] = task;
        Id++;


        //Update local storage;
        updateLocalStorage();
}

else {
    alert("Please enter the task name.");
}

}

