var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Hi There");
});

app.get("/bye", function (req, res) {
    res.send("Goodbye!!!");
});

app.get("/dog", function (req, res) {
    res.send("WOOF! WOOF!");
});

app.get("/cat", function (req, res) {
    res.send("MEOW!");
});

app.get("/r/:subredditName", function (req, res) {
    var Subreddit = req.params.subredditName;
    res.send(("WELCOME TO A " + Subreddit + " SUBREDDIT!!").toUpperCase());
});

app.get("/r/:subredditName/comments/:id/:title", function (req, res) {
    res.send("Welcome to a Subreddit Comments Page!!");
    console.log(req.params);
});

app.get("*", function (req, res) {
    res.send("You are Starred!!!");
});

app.listen(3000, process.env.ip, function () {
    console.log("Server has started!!!");
});