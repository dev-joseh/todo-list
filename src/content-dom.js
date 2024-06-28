import {Todo, removeTodo, removeAllDone, toggleFinished, printList} from "./todos.js";
import {todoList} from "./todoList.js";
import {popupNewTodo, popupEditTodo} from "./popups.js"

const displayHeader = function() {
    const container = document.createElement("div");

    const titulo = document.createElement("h1");
    const addTodoButton = document.createElement("button");
    const removeAllDoneButton = document.createElement("button"); 
    
    titulo.textContent = "To-do List";
    addTodoButton.textContent = "New To-do";
    removeAllDoneButton.textContent = "Remove All Done";

    addTodoButton.addEventListener("click", ()=> {
        document.body.appendChild(popupNewTodo());
    });
    removeAllDoneButton.addEventListener("click", removeAllDone);

    container.appendChild(titulo);
    container.appendChild(addTodoButton);
    container.appendChild(removeAllDoneButton);
    // container.appendChild(toggleTheme);

    // Debugger Button
    const debug = document.createElement("button");
    debug.textContent = "Log List";
    debug.addEventListener("click", printList);
    container.appendChild(debug);

    return container;
}

export {displayHeader};