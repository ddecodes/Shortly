const URL = require("../models/url");

async function handleHome(req, res) {
    if (!req.user) return res.redirect("/login");
    const userId = req.user._id;
    const allUrl = await URL.find({ createdBy: userId });
    res.render("home", { urls: allUrl });
}

async function handleSignup(req, res) {
    res.render("signup");
}

async function handleLogin(req, res) {
    res.render("login");
}

module.exports = { handleHome, handleSignup, handleLogin };
