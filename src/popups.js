
import {newTodo, editTodo} from "./todos";

const popupBase = function(popupTitle, textValue="", subtextValue="", projectValue="", dateValue="", index) {
    const container = document.createElement("div");

    // Title
    const title = document.createElement("h2");
    title.textContent = popupTitle;

    // Form
    const form = document.createElement("form");
    const textInput = document.createElement("input");
    const subtextInput = document.createElement("input");
    const projectInput = document.createElement("input");
    const dateInput = document.createElement("input");
    const submitButton = document.createElement("button");
    const closeButton = document.createElement("button");

    textInput.type="text";
    textInput.value=textValue;
    textInput.placeholder="Text";

    subtextInput.type="text";
    subtextInput.value=subtextValue;
    subtextInput.placeholder="Subtext";

    projectInput.type="text";
    projectInput.value=projectValue;
    projectInput.placeholder="Project";

    dateInput.type="text";
    dateInput.value=dateValue;
    dateInput.placeholder="Date";

    submitButton.textContent = "Submit";
    submitButton.type = "button";
    if(popupTitle == "New Todo") {
        submitButton.addEventListener("click", ()=> {
            newTodo(textInput.value,subtextInput.value,projectInput.value,dateInput.value);
        });
    }
    else {
        submitButton.addEventListener("click", ()=> {
            editTodo(index,textInput.value,subtextInput.value,projectInput.value,dateInput.value);
        });
    }
    submitButton.addEventListener("click", ()=> {container.remove()});

    closeButton.textContent = "Close";
    closeButton.type = "button"
    closeButton.addEventListener("click", ()=> {container.remove()});

    form.appendChild(textInput);
    form.appendChild(subtextInput);
    form.appendChild(projectInput);
    form.appendChild(dateInput);
    form.appendChild(submitButton);
    form.appendChild(closeButton);

    container.appendChild(title);
    container.appendChild(form);

    return container;
}

const popupNewTodo = function() {
    const container = popupBase("New Todo");

    return container;
}

const popupEditTodo = function(index, textValue="", subtextValue="", projectValue="", dateValue="") {
    const container = popupBase("Edit Todo",textValue, subtextValue, projectValue, dateValue, index);

    return container;
}

export {popupNewTodo, popupEditTodo};