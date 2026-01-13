const jwt = require("jsonwebtoken");

function setUser(user) {
    const payload = { _id: user._id, email: user.email };
    const token = jwt.sign(payload, "secret");
    return token;
}

function getUser(token) {
    if (!token) return null;
    try {
        return jwt.verify(token, "secret");
    } catch (error) {
        return null;
    }
}

module.exports = { setUser, getUser };