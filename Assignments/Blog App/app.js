var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require("body-parser"),
    expressSanitizer = require("express-sanitizer"),
    methodOverride = require("method-override");

//App Config
mongoose.connect("mongodb://localhost/blogApp", { useNewUrlParser: true, useUnifiedTopology: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use(methodOverride("_method"));


//Mogoose Model Config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now }
});

var Blog = mongoose.model("Blog", blogSchema);

//Index Routes
app.get('/', (req, res) => {
    res.redirect("/blogs");
});

app.get('/blogs', (req, res) => {
    Blog.find({}, function (err, blogs) {
        if (err) {
            console.log("err");
        } else {
            res.render("index", { blogs: blogs });
        }
    });
});

//New Route
app.get('/blogs/new', (req, res) => {
    res.render("new");
});

//Create Route
app.post('/blogs', (req, res) => {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function (err, newBlog) {
        if (err) {
            res.render("new");
        } else {
            res.redirect("/blogs");
        }
    });
});

//Show Route
app.get('/blogs/:id', (req, res) => {
    Blog.findById(req.params.id, function (err, foundBlog) {
        if (err) {
            res.redirect("/blogs")
        } else {
            res.render("show", { blog: foundBlog });
        }
    });
});

//Edit Route
app.get('/blogs/:id/edit', (req, res) => {
    Blog.findById(req.params.id, function (err, foundBlog) {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.render("edit", { blog: foundBlog });
        }
    });
});

//Update Route
app.put('/blogs/:id', (req, res) => {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function (err, updatedBlog) {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

//Delete Route
app.delete('/blogs/:id', (req, res) => {
    Blog.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs");
        }

    });
});

app.listen(3000, process.env.IP, function () {
    console.log("Server Has Started!!!");
});