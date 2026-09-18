var newButton = document.getElementById("new");
var ftList = document.getElementById("ft_list");


loadTodos();


newButton.addEventListener("click", function () {
    var todo = prompt("Create a new TO DO:");

    if (todo !== null && todo.trim() !== "") {
        createTodo(todo);
        saveTodos();
    }
});


function createTodo(text) {
    var div = document.createElement("div");

    div.textContent = text;

    div.addEventListener("click", function () {
        if (confirm("Do you want to remove this TO DO?")) {
            div.remove();
            saveTodos();
        }
    });

    ftList.insertBefore(div, ftList.firstChild);
}

function saveTodos() {
    var todos = [];

    var items = ftList.children;

    for (var i = 0; i < items.length; i++) {
        todos.push(items[i].textContent);
    }

    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; max-age=31536000; path=/";
}


function loadTodos() {
    var cookies = document.cookie.split("; ");

    for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split("=");

        if (parts[0] === "todos") {
            var todos = JSON.parse(decodeURIComponent(parts[1]));

            for (var j = 0; j < todos.length; j++) {
                createTodo(todos[j]);
            }

            break;
        }
    }
}