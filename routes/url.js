const express = require("express");
const router = express.Router();
const { handleGenerateShortUrl, handleGetShortUrl, handleGetAnalytics } = require("../controllers/url");

router.post("/", handleGenerateShortUrl);
router.get("/:shortId", handleGetShortUrl);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
