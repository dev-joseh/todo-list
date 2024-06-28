import {Todo, newTodo, removeTodo, removeAllDone, editTodo, toggleFinished} from "./todos.js";
import {todoList} from "./todoList.js";

const displayHeader = function() {
    const container = document.createElement("div");

    const titulo = document.createElement("h1");
    const addTodoButton = document.createElement("button");
    const clearAllDoneButton = document.createElement("button");


    return container;
}

export {displayHeader};