const URL = require("../models/url");

async function handleHome(req, res) {
    const allUrl = await URL.find();
    res.render("home", { urls: allUrl });
}

module.exports = { handleHome };
