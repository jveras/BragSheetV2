var express = require("express"),
    app = express(),
    port = process.env.port || 8081,
    bodyParser = require("body-parser"),
    cors = require("cors"),
    morgan = require("morgan"),
    cookieParser = require("cookie-parser"),
    methodOverride = require("method-override");

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ "extended": "true" }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/view");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);


app.get("/", function(req, res) {
    res.render("index", {
        title: "This sent from some site",
        content: "guhhhh"
    });
});

app.get("/i2", function(req, res) {
    res.render("index2", {
        title: "Index 2",
        content: "ughhh",
        num: 10
    });
});

app.get("/i3", function(req, res) {
    res.render("index3", {
        title: "index 3",
        content: "aaaaa"
    });
});

app.post("/post", function(req, res) {
    var d = req.body;

    console.log(d.first);

});


app.listen(port, function() {
    console.log("Server started on port " + port);
});