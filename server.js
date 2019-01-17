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
        title: "Brag Sheet"
    });
});

app.get("/Account/Register", function(req, res) {
    res.render("account/register", {
        title: "Create Account"
    });
});

app.post("/Account/Register", function(req, res) {
    var d = req.body;

    console.log(d.first);

});

app.get("/Account/Login", function(req, res) {
    res.render("account/login", {
        title: "Log In",
        test: "blah"
    });
});

app.post("/Account/Login", function(req, res) {

    var data = req.body;

    console.log(data);

    res.render("account/login", {
        title: "Log In",
        test: "Sent Successfully"
    });
});


app.listen(port, function() {
    console.log("Server started on port " + port);
});