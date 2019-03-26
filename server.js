var express = require("express"),
    app = express(),
    port = process.env.port || 8081,
    bodyParser = require("body-parser"),
    cors = require("cors"),
    morgan = require("morgan"),
    cookieParser = require("cookie-parser"),
    methodOverride = require("method-override"),
    mysql = require("mysql");

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ "extended": "true" }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/view");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

var connection = mysql.createConnection({
    host: 'platinumprojects.net',
    user: 'plati_student',
    password: '999JamaicaAve!',
    database: 'platin12_brag'
});

connection.connect(function(err) {
    if (err) { console.error(err); }

    console.log("Connected!!");
});
/*
var n = { first: "J", last: "V", gender: "M", grade: 12 };

connection.query('INSERT INTO profile SET ?', n, function(error, results, fields) {
    if (error) console.error(error);

    console.log(results);
});

connection.query('SELECT * FROM profile', function(error, results, fields) {
    if (error) console.error(error);

    console.log(results[0].Last + " " + results[0].First);
});
*/


app.get("/", function(req, res) {
    res.render("index", {
        title: "Brag Sheet"
    });
});

app.get("/Account/Register", function(req, res) {



    res.render("account/register", {
        css: "/css/register.css",
        title: "Acount Created"
    });
});

app.post("/Account/Register", function(req, res) {
    var d = req.body;

    console.log(d);
    
    if(d.osis.length ===9){
        console.log("Long Enough");
        if(osis=d.osisConfirm){
            console.log("Are the same")
        }else{
            console.log("Are not the same");
        }
    }else{
        console.log("Not Long Enough");
    }
    var student = {
        email: d.tbEmail,
        osis: parseInt(d.osis),
        password: d.osis,
        verify: 0
    };

    connection.query('INSERT INTO account SET ?', student, function(error, results, fields) {
        if (error) throw console.error(error);
        
        res.render("/account/profile", {
            title: "Profile",
            css: "/css/profile.css"
        });

    });
    

});

app.get("/Account/Login", function(req, res) {
    res.render("account/login", {
        title: "Log In",
        css: "/css/login.css"
    });
});


app.post("/Account/Login", function(req, res) {

    var data = req.body;

    console.log(data);

    res.render("account/login", {
        title: "Log In",

    });
});


app.get("/Account/Profile", function(req, res) {
    res.render("account/profile", {
        title: "Profile",
        css: "/css/profile.css"
    });
});


app.post("/Account/Profile", function(req, res) {

    var data = req.body;

    console.log(data);

});


app.get("/Profile/GetAll", function(req, res) {

    connection.query('SELECT * FROM account', function(error, results, fields) {
        if (error) console.error(error);

        res.json({
            students: results
        });
    });
});

app.listen(port, function() {
    console.log("Server started on port " + port);
});