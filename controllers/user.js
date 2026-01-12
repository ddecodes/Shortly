const User = require("../models/user");
const URL = require("../models/url");

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.render("home", { urls: [] });
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
        res.render("home", { urls: [] });
    } else {
        res.render("login", { error: "Invalid email or password" });
    }
}

module.exports = {
    handleUserSignup,
    handleUserLogin
}
