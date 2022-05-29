// hold shift alt and down arrow to copy line
const todoinput = document.querySelector(".todoInput");
const todobutton = document.querySelector(".todoButton");
const todolist = document.querySelector(".todoList");

//event listener
todobutton.addEventListener("click", addTodo);
todolist.addEventListener('click', deleteCheck);

//Functions
function addTodo(event){
    console.log("test");
    // prevents form from submitting so text stays in console
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //creates LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoinput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Buttons
    const completedButton = document.createElement("button");
    //completedButton.innerText = '+';
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
     //Buttons trash
     const trashButton = document.createElement("button");
     //trashButton.innerText = '-';
     trashButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
     trashButton.classList.add("trash-btn");
     todoDiv.appendChild(trashButton);
     //add to list
     todolist.appendChild(todoDiv);
     //clearing values
     todoinput.value = "";
}

function deleteCheck(e) {
    // show item being clicked
    //console.log(e.target)
    const item = e.target;
    if(item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }

    // cross out
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");

    }
}

