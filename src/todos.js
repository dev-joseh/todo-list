import {format} from "date-fns";
import {todoList, setTodoList} from "./todoList.js";

class Todo {
    constructor(text, subtext, project, finished, date) {
        this.text=text;
        this.subtext=subtext;
        this.project=project;
        this.finished=finished;
        this.date=date;
    }
}

const newTodo = function(text, subtext, project, date) {
    todoList.push(new Todo(text, subtext, project, false, date));
}

const removeTodo = function(index) {
    todoList.splice(index,1);
}

const removeAllDone = function() {
    setTodoList(todoList.filter((todo) => todo.finished == false));
}

const editTodo = function(index, text, subtext, project, date) {
    todoList[index] = new Todo(text, subtext, project, todoList[index].finished, date);
}

const toggleFinished = function(index) {
    todoList[index].finished = todoList[index].finished == true ? false : true;
}

// Debugging
const printList = function() {
    for(let i=0;i<todoList.length;i++) {
        console.log(todoList[i]);
    }
}

export {Todo, newTodo, removeTodo, removeAllDone, editTodo, toggleFinished, printList};