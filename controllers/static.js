const URL = require("../models/url");

async function handleHome(req, res) {
    const allUrl = await URL.find();
    res.render("home", { urls: allUrl });
}

async function handleSignup(req, res) {
    res.render("signup");
}

module.exports = { handleHome, handleSignup };
