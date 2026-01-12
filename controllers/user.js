const User = require("../models/user");
const URL = require("../models/url");

const { setUser, getUser } = require("../service/auth");

const { v4: uuidv4 } = require("uuid");

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.render("home", { urls: [] });
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
        const sessionId = uuidv4();
        setUser(sessionId, user);
        res.cookie("uid", sessionId);
        res.render("home", { urls: [] });
    } else {
        res.render("login", { error: "Invalid email or password" });
    }
}

module.exports = {
    handleUserSignup,
    handleUserLogin
}
