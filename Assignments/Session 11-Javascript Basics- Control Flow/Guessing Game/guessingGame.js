var number = 4;

guess = prompt("Guess a number");

if (Number(guess) === number) {
    alert("You got it correct!");
}
else if (Number(guess) > number){
    alert("WRONG! Number is smaller than guess.");
}
else{
    alert("WRONG! Number is larger than guess.");
}
