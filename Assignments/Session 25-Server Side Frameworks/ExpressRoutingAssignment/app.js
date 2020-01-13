var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function (req, res) {
    var animal = req.params.animal.toLowerCase();
    if (animal === "pig") {
        res.send("The pig says 'Oink!'");
    }
    else if (animal === "cow") {
        res.send("The cow says 'Moo!'");
    }
    else if (animal === "dog") {
        res.send("The dog says 'Woof Woof!'");
    }
    else {
        res.send("Speak?");
    }
});

app.get("/repeat/:word/:n", function (req, res) {
    var str = "";
    var word = req.params.word;
    var n = req.params.n;

    for (var i = 0; i < n; i++) {
        if (i === n - 1) {
            str = str.concat(word);
        }
        else {
            str = str.concat(word + " ");
        }
    }
    res.send(str);
});

app.get("*", function (req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
});


app.listen(3000, process.env.ip, function () {
    console.log("Server has Started!!!");
});