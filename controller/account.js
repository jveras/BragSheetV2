var router = require("express")();

router.get("Register", (req, res) => {
	res.render("account/register", {});
});

router.post("Register", (req, res) => {
	res.render("account/confirm", {});
});
