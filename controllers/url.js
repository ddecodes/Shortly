const { nanoid } = require("nanoid");
const URL = require("../models/url");

async function handleGenerateShortUrl(req, res) {
    const shortId = nanoid(6);
    const body = req.body;
    if (!body.url) return res.status(400).json({ message: "URL is required" });
    await URL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: []
    })
    res.status(201).json({ shortId })
}

module.exports = {
    handleGenerateShortUrl
}

