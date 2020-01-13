var thereYet = false;
var word;

while(thereYet === false){
    word = prompt("Are we there yet?");

    if (word === "Yes" || word === "Ye" || word === "yes" || word === "Yeah"|| word === "yeah"|| word === "ye"|| word === "YEAH") {
        thereYet = true;
    }
}

alert("Yay, we finally made it!")
