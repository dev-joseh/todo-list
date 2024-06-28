
import {Todo, newTodo, printList} from "./todos.js";
import {todoList} from "./todoList.js";

printList();
newTodo("Added new todo", "more subtext", "Project V", "Undone", "2009/09/29");
printList();