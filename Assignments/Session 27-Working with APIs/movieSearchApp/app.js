var apiKey = "&apikey=thewdb";

var express = require('express');
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render("search");
});

app.get('/results', (req, res) => {
    var searchTerm = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + searchTerm + apiKey;
    console.log(url);
    request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            var data = JSON.parse(body);
            res.render("results", { data: data });
        }
    });
});

app.listen(3000, () => {
    console.log(`Server started!!!`);
});
