const { getUser } = require("../service/auth");

async function restrictToLoggedinUserOnly(req, res, next) {
    const token = req.cookies?.uid;  //using cookies could also be done using headers //const uid = req.headers.authorization;
    if (!token) return res.redirect("/login"); // const token = uid.split('Bearer ')[1];
    const user = getUser(token);
    if (user) {
        req.user = user;
        next();
    } else {
        return res.redirect("/login");
    }
}

async function checkAuth(req, res, next) {
    const token = req.cookies?.uid;
    const user = getUser(token);
    req.user = user;
    next();
}
module.exports = {
    restrictToLoggedinUserOnly,
    checkAuth
}
