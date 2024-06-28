import {format} from "date-fns";
import {todoList} from "./todoList.js";

class Todo {
    constructor(text, subtext, project, status, date) {
        this.text=text;
        this.subtext=subtext;
        this.project=project;
        this.status=status;
        this.date=date;
    }
}

const newTodo = function(text, subtext, project, status, date) {
    todoList.push(new Todo(text, subtext, project, status, date));
}

// Debugging
const printList = function() {
    for(let i=0;i<todoList.length;i++) {
        console.log(todoList[i]);
    }
}

export {Todo, newTodo, printList};