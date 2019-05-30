const db = require("../models");

module.exports = {
    getUserData: async function(req, res) {
        const userID = req.session.passport.user.id;

        const user = await db.User.findById(userID);

        console.log(user);
        console.log("found user by id, sending to front end");
        res.send(user);
    }
}