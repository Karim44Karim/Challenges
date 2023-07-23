<<<<<<< HEAD


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

try {
    if (localStorage.getItem("memory") !== {}){

        // get memory
        let obj = JSON.parse(localStorage.memory);
        
        
        //add task
        Object.keys(obj).forEach(createTask);

        // set id to the largest id in memory
        id = Object.keys(obj).reduce((a, b) => obj[a] > obj [b] ? a:b);
    }
} catch (error) {
    
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

    // adding the delete function to the delete btn
    delBtn.addEventListener("click", ()=> {
        taskDiv.remove();
        delete memory[id];
        console.log(id);
        updateStorage();
    });
}

// define a function that adds a single task and updates the memory accordingly

function addSingleTask() {
    if (inputField.value){
        createTask(inputField.value);
        // update memory    
        idInt++;
        id = idChar + idInt;
        memory[id] = inputField.value;
        updateStorage();
    }
}

// function deleteTask() {
//     console.log(this.parentElement.children.length);
//     while (this.parentElement.children.length > 1) {
//         this.parentElement.children[0].remove();
//     }
//     this.parentElement.remove();
//     this.remove();
// }

function updateStorage() {
    localStorage.memory = JSON.stringify(memory);
}
=======
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

>>>>>>> e14f2fba982cf7ee7f467f611425acd78e034683
