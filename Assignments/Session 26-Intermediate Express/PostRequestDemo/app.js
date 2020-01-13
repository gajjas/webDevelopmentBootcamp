var express = require("express");
var app = express();
var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lilly"];

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/friends", function (req, res) {
    res.render("friends", { friends: friends });
});

app.post('/addfriend', (req, res) => {
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect("/friends");
});


app.listen(3000, process.env.ip, function () {
    console.log("Server Started!!!");
});