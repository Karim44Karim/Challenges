let input_E = document.getElementsByClassName("classes-to-add")[0];
let removeField = document.getElementsByClassName("classes-to-remove")[0];
let classesContainer = document.getElementsByClassName("classes-list")[0];
let text = document.createTextNode("No Classes To Show");
let currentElement = document.querySelector("[title = 'Current']");
let input = input_E.value.toLowerCase();
let removeValues = removeField.value.toLowerCase();
let currentElementClasses = Array.from(currentElement.classList);
let removeElements = [];

classesContainer = classesContainer.getElementsByTagName("div")[0];
classesContainer.appendChild(text);

input_E.addEventListener("blur", addClassesToList);      
input_E.addEventListener("blur", addClassesToCurrentElement);
input_E.addEventListener("blur", sortClasses);
input_E.addEventListener("blur", clearInput);
removeField.addEventListener("blur", removeClasses);

function addClassesToList() {
  getInputValues();
  insertElements(input);
}

function addClassesToCurrentElement() {
  getInputValues();
  if (input.length>0) {
    for (let index = 0; index < input.length; index++) {
      // let classElement = input[index];
      currentElement.classList.add(input[index]);
    }
  }

}

function insertElements(input) {
  getInputValues();
  if (input.length > 0) {
    if (classesContainer.contains(text)) {
      classesContainer.removeChild(text);
    }
    
    for (let index = 0; index < input.length; index++) {
      let element = document.createElement("span");
      let text = document.createTextNode(input[index]);
      element.appendChild(text);
      element.classList.add(input[index]);
      classesContainer.appendChild(element);
    }
  }
}

function getInputValues() {
  input = input_E.value.toLowerCase();
  input = input.split(" ");
  input.sort();
}

function clearInput() {
  input_E.value = "";
}

function sortClasses() {
  currentElementClasses = Array.from(currentElement.classList);

  while (currentElement.classList.length > 0) {
    currentElement.classList.remove(currentElement.classList.item(0));
  }
  currentElementClasses.sort();

  for (let index = 0; index < currentElementClasses.length; index++) {
    currentElement.classList.add(currentElementClasses[index]);
  }
}

function removeClasses() {

  removeValues = removeField.value.toLowerCase();
  removeValues = removeValues.split(" ");
  removeValues.sort();
  

  for (let index = 0; index < removeValues.length; index++) {
    
    let currentRemoveClass = removeValues[index];
    let currentRemoveElements = classesContainer.getElementsByClassName(currentRemoveClass);

    for (let i = 0; i < currentRemoveElements.length; i++) {
      let elementToRemove = currentRemoveElements[i];
      elementToRemove.parentElement.removeChild(elementToRemove);
    }

  }

  if (classesContainer.childNodes.length === 0) {
    classesContainer.appendChild(text);
  }
  removeField.value = "";
  
}
