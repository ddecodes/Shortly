const User = require("../models/user");
const URL = require("../models/url");

const { setUser, getUser } = require("../service/auth");

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.render("home", { urls: [] });
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
        const token = setUser(user);
        res.cookie("uid", token); //res.json({ token });
        res.render("home", { urls: [] });
    } else {
        res.render("login", { error: "Invalid email or password" });
    }
}

module.exports = {
    handleUserSignup,
    handleUserLogin
}
