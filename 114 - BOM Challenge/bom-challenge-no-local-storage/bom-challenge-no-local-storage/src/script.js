// cashing elements
let input = document.querySelector('input[type="text"]');
let add = document.querySelector('input[type="submit"]');

// Define local memory
const memory = {};

// Get storage
try {
    if(localStorage.memory) {
      let obj = JSON.parse(localStorage.memory) ?? {};
      Object.values(obj).forEach(createTask);
    }
} catch (e) { }

add.addEventListener("click", function () {
    // validate input not empty
    if (input.value !== "") {
        createTask(input.value);
    }
})

// create function of creating and deleting the task
function createTask(value) {

    // Append to memory
    let key = Math.random();
    memory[key] = value;

    // Update local storage
    updateStorage();

    let task = document.createElement("div");
    let p = document.createElement("p");
    let del = document.createElement("button");

    // create text
    let pText = document.createTextNode(value);
    let delText = document.createTextNode("Delete");

    // appending
    del.appendChild(delText);
    p.appendChild(pText);
    task.appendChild(p);
    task.appendChild(del);
    document.body.appendChild(task);

    // deleting element
    del.addEventListener("click", function () {
        task.remove();

        // Remove from memory
        delete memory[key];

        // Update local storage
        updateStorage();
    })
}

/*
* Update storage method
*/
function updateStorage() {
    localStorage.setItem('memory', JSON.stringify(memory));
}