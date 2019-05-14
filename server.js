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


/*
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

    console.log(results[0]);
});

*/

app.get("/", function(req, res) {
    res.render("index", {
        title: "Brag Sheet"
    });
});

app.get("/Account/Register", function(req, res) {

    res.render("account/register", {
        title: "Create New Account"
    });
});

app.post("/Account/Register", function(req, res) {
    var d = req.body;

    console.log(d);

    res.json({
        data:d.studentFirstName
    });
});

app.get("/Student/Evaluation", function(req, res) {

    res.render("student/evaluation", {
        title: "Evaluation"
    });
});

// app.post("/Account/Evaluation", function(req, res) {
//     var d = req.body;
    

//     console.log(d);

//     res.json({
//         data:d.studentFirstName
//     });
// });

    // CREATE TABLE account (
    //     ID int NOT NULL UNIQUE AUTO_INCREMENT ,
    //     Email varchar(64) NOT NULL UNIQUE ,
    //     Password varchar(256) NOT NULL,
    //     verify int NOT NULL,
    //     RoleID int NOT NULL,
    //     PRIMARY KEY (ID),
    //     FOREIGN KEY (RoleID) REFERENCES role(ID),
    //     FOREIGN KEY (verify) REFERENCES verification(ID)
    // );
    
    // if(d.osis.length ===9){
    //     console.log("Long Enough");
    //     if(osis=d.osisConfirm){
    //         console.log("Are the same")
    //     }else{
    //         console.log("Are not the same");
    //     }
    // }else{
    //     console.log("Not Long Enough");
    // }

    // var gen = {
    //     code: "0123ABCde98"
    // };


    // connection.query('INSERT INTO verification SET ?', gen, function(error, results, fields) {
    //     if (error) console.error(error);

    //     console.log(results.insertId);

    //     var student = {
    //         email: d.tbEmail,
    //         password: d.osis,
    //         verify: results.insertId,
    //         roleid: 5
    //     };
    
    //     connection.query('INSERT INTO account SET ?', student, function(error, accResults, fields) {
    //         if (error) console.error(error);
    
            
    //         var profile = {
    //             first: "Jared",
    //             last: "Knight",
    //             gender: 1,
    //             gradelvl: 11,
    //             gpa: 3.0,
    //             schoolID: 1,
    //             accountID: results.insertId
    //         };
            
    //         connection.query('INSERT INTO profile SET ?', profile, function(error, results, fields) {
    //             if (error) console.error(error);
        
    //             console.log(results);
    
    //             res.render("account/register", {
    //                 title: "Register Successful",
    //                 css: "/css/register.css"
    //             })
    //         });


    //     });
        
    // });




app.get("/Account/Login", function(req, res) {
    res.render("account/login", {
        title: "Log In"
    });
});


app.post("/Account/Login", function(req, res) {

    var data = req.body;

    console.log(data);

    res.render("account/login", {
        title: "Log In",

    });
});


app.get("/Student/Profile", function(req, res) {
    res.render("student/profile", {
        title: "Profile"
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
