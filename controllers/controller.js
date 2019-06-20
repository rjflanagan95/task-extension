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

        db.User.findByIdAndUpdate( { _id: userID }, { $set: { tasks: req.body }})
        .then(dbres => res.json(dbres))
        .catch(err => res.status(422).json(err));
    },

    updateReminders: async function(req, res) {
        const userID = req.session.passport.user.id;

        db.User.findByIdAndUpdate({ _id: userID }, { $set: { reminders: req.body }})
        .then(dbres => res.json(dbres))
        .catch(err => res.status(422).json(err));
    },

    updateList1: async function(req, res) {
        const userID = req.session.passport.user.id;

        db.User.findByIdAndUpdate({ _id: userID }, { $set: { list1: req.body}})
        .then(dbres => res.json(dbres))
        .catch(err => res.status(422).json(err));
    },

    updateList2: async function(req, res) {
        const userID = req.session.passport.user.id;

        db.User.findByIdAndUpdate({ _id: userID }, { $set: { list2: req.body}})
        .then(dbres => res.json(dbres))
        .catch(err => res.status(422).json(err));
    },
}