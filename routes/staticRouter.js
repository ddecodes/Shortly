const express = require("express");
const router = express.Router();
const { handleHome, handleSignup } = require("../controllers/static");

router.get("/home", handleHome);
router.get("/signup", handleSignup);

module.exports = router;
