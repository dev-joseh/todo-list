let todoList = [
    {
        "text": "First example todo",
        "subtext": "Some subtext",
        "project": "Project x",
        "finished": true,
        "date": "2004/04/24"
    },
    {
        "text": "Second example todo",
        "subtext": "Some subtext",
        "project": "Project x",
        "finished": true,
        "date": "2004/04/24"
    },
    {
        "text": "Third example todo",
        "subtext": "Some subtext",
        "project": "Project x",
        "finished": false,
        "date": "2004/04/24"
    },
    {
        "text": "Fourth example todo",
        "subtext": "Some subtext",
        "project": "Project x",
        "finished": false,
        "date": "2004/04/24"
    },
]

const setTodoList = function(newList) {
    todoList = newList;
}

export {todoList, setTodoList};