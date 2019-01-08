var express = require("express"),
    app = express(),
    port = 8081,
    bodyParser = require("body-parser"),
    cors = require("cors");


app.use(bodyParser.urlencoded({ "extended": "true" }));
app.use(bodyParser.json());
//app.use(bodyParser.json({ type: "application/vdn.api+json"}));
app.use(cors());

app.get("/", function(req, res){
    res.write("Homepage");
    res.end();
});

app.post("/post", function(req, res){
	var d = req.body;

	console.log(d.first);

});


app.listen(port, function(){
    console.log("Server started on port " + port);
});

