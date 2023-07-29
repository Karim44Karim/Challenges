const listsContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');

const LOCAL_STORAGE_LIST_KEY = 'task.lists'; // the dot prevents overwriting this date in local storage it also prevents other sites from doing so. It is called "name spacing". So we don't have to worry about collisions between different sites.

const LOCAL_STORAGE_LIST_KEY_LIST_ID_KEY = 'task.SelectedListId';

let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let SelectedListId = localStorage.getItem(LOCAL_STORAGE_LIST_KEY_LIST_ID_KEY);

listsContainer.addEventListener("click", e => {
    if (e.target.tagName.toLowerCase() === 'li') {
        SelectedListId = e.target.dataset.listId;
        saveAndRender();
    }
});

newListForm.addEventListener('submit', e=>{
    e.preventDefault();
    const listName = newListInput.value;
    if (listName == null || listName === '') return 
    const list = createList(listName);
    newListInput.value = null;
    lists.push(list);
    saveAndRender();
});

function createList(name) {
    return { id: Date.now().toString(), name: name, tasks: []}
}

function saveAndRender (){
    save();
    render();
}

function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY , JSON.stringify(lists));
    
}
function render() {
    clearElement(listsContainer);
    lists.forEach(list => {
        const listElement = document.createElement('li');
        listElement.dataset.listId = list.id;
        listElement.classList.add("list-name");
        listElement.innerText = list.name;
        if (list.id === SelectedListId) {
            listElement.classList.add('active-list');
        }
        listsContainer.appendChild(listElement);

    });
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

render();