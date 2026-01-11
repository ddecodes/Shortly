const express = require("express");
const router = express.Router();
const { handleHome } = require("../controllers/static");

router.get("/home", handleHome);

module.exports = router;
