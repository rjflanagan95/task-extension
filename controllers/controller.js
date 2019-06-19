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

    updateLists: async function(req, res) {
        const userID = req.session.passport.user.id;

        db.User.findByIdAndUpdate({ _id: userID }, { $set: { lists: req.body}})
    },

    updateDailyGoals: async function(req, res) {
        const userID = req.session.passport.user.id;

        db.User.findByIdAndUpdate({ _id: userID }, { $set: { dailyGoals: req.body }})
        .then(dbres => res.json(dbres))
        .catch(err => res.status(422).json(err));
    },

    updateWeeklyGoals: async function(req, res) {
        const userID = req.session.passport.user.id;

        db.User.findByIdAndUpdate({ _id: userID }, { $set: { weeklyGoals: req.body }})
        .then(dbres => res.json(dbres))
        .catch(err => res.status(422).json(err));
    },

    updateMonthlyGoals: async function(req, res) {
        const userID = req.session.passport.user.id;

        db.User.findByIdAndUpdate({ _id: userID }, { $set: { monthlyGoals: req.body }})
        .then(dbres => res.json(dbres))
        .catch(err => res.status(422).json(err));
    }
}