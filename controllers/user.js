const User = require("../models/user");

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.render("home", { user });
}

module.exports = {
    handleUserSignup
}
