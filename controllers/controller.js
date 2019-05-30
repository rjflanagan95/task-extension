const db = require("../models");

module.exports = {
    getUserData: async function(req, res) {
        const userID = req.session.passport.user.id;

        db.User.findById(userID)
        .then(function(data) {
            res.send(data);
        })
        .catch(function(err) {
            res.json(err);
        });
    },

    updateTasks: async function(req, res) {
        const userID = req.session.passport.user.id;

        // findOneAndUpdate is deprecated but this works for now
        db.User.findOneAndUpdate( { _id: userID }, { $set: { tasks: req.body }})
        .then(dbres => res.json(dbres))
        .catch(err => res.status(422).json(err));
    }
}