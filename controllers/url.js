const { nanoid } = require("nanoid");
const URL = require("../models/url");

async function handleGenerateShortUrl(req, res) {
    const shortId = nanoid(6);
    const body = req.body;
    if (!body.url) return res.status(400).json({ message: "URL is required" });
    await URL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: [],
        createdBy: req.user._id   //user comes from auth middleware
    })
    res.render("home", { id: shortId })
}

async function handleGetShortUrl(req, res) {
    const shortId = req.params.shortId;
    const url = await URL.findOneAndUpdate({ shortId }, { $push: { visitHistory: { timestamp: Date.now() } } }
    );
    if (!url) return res.status(404).json({ message: "URL not found" });
    res.redirect(url.redirectUrl);
}

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const url = await URL.findOne({ shortId });
    if (!url) return res.status(404).json({ message: "URL not found" });
    res.status(200).json({ totalClicks: url.visitHistory.length, analytics: url.visitHistory });
}

module.exports = {
    handleGenerateShortUrl,
    handleGetShortUrl,
    handleGetAnalytics
}

