var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit"){
    if (input === "list") {
        console.log("**********");
        todos.forEach(function(todo, index){
            console.log(index + ": " + todo);
        });
        console.log("**********");
    }
    else if (input === "new") {
        var newTodo = prompt("Enter new todo?");
        todos.push(newTodo);
        console.log("Added Todo")
    }
    else if(input === "delete"){
        var indexDel = prompt("Enter index of todo to delete:");

        todos.splice(indexDel, 1);
        console.log("Deleted Todo")
    }

    input = prompt("What would you like to do?");
}
console.log("You Quit the App!!!")
