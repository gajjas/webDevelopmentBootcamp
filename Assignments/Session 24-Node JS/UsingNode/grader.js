//Node Average Exercise

function average(scores) {
    var sum = 0;

    scores.forEach(element => {
        sum += element;
    });

    return Math.round((sum / scores.length));
}


var scores = [90, 98, 89, 100, 100, 86, 94];
console.log("Average 1: " + average(scores));

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log("Average 2: " + average(scores2));