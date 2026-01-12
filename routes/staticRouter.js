const express = require("express");
const router = express.Router();
const { handleHome, handleSignup, handleLogin } = require("../controllers/static");

router.get("/home", handleHome);
router.get("/signup", handleSignup);
router.get("/login", handleLogin);

module.exports = router;
