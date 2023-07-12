
// define tasks container
let tasksContainer = document.querySelector('[class="tasksContainer"]');
//define add task btn
let addTaskBtn = document.querySelector('[value="Add Task"]');
//define inputField
let inputField = document.getElementsByClassName("input")[0];
// define local memory
const memory = {};

let idChar = 'a';
let idInt = '0';
let id = idChar + idInt;

if (localStorage.getItem("memory")){

    // get memory
    let obj = JSON.parse(localStorage.memory);
    id = Object.keys(obj).reduce((a, b) => obj[a] > obj [b] ? a:b);
    
    //add task
    Object.values(obj).forEach(createTask);
}

addTaskBtn.addEventListener("click", addSingleTask);
document.body.addEventListener("keypress", (e)=> {if (e.key == 'Enter') {addSingleTask();}})


// defining a funtion that create the tasks 
function createTask(param) {
    let taskDiv = document.createElement("div");
    let taskTextDiv = document.createElement("div");
    let taskText = document.createTextNode(param);
    let delBtn = document.createElement("input");

    taskDiv.classList.add("task");
    taskTextDiv.classList.add("taskText");
    delBtn.setAttribute("type","submit");
    delBtn.classList.add("delete");
    delBtn.setAttribute("value","delete");

    taskTextDiv.appendChild(taskText);
    taskDiv.appendChild(taskTextDiv);
    taskDiv.appendChild(delBtn);
    tasksContainer.append(taskDiv);
}

// define a function that adds a single task and updates the memory accordingly

function addSingleTask() {
    if (inputField.value){
        createTask(inputField.value);
        // update memory    
        idInt++;
        id = idChar + idInt;
        memory[id] = inputField.value;
        localStorage.memory = JSON.stringify(memory);
    }
}