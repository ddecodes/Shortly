const { getUser } = require("../service/auth");

async function restrictToLoggedinUserOnly(req, res, next) {
    const sessionId = req.cookies?.uid;
    if (!sessionId) return res.redirect("/login");
    const user = getUser(sessionId);
    if (user) {
        req.user = user;
        next();
    } else {
        return res.redirect("/login");
    }
}

async function checkAuth(req, res, next) {
    const sessionId = req.cookies?.uid;
    const user = getUser(sessionId);
    req.user = user;
    next();
}
module.exports = {
    restrictToLoggedinUserOnly,
    checkAuth
}
