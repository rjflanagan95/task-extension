const db = require("../models");
const request = require("request");

module.exports = {
    // get user data on loading the page
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

    // update tasks after adding/removing
    updateTasks: async function(req, res) {
        const userID = req.session.passport.user.id;

        db.User.findByIdAndUpdate( { _id: userID }, { $set: { tasks: req.body }})
        .then(dbres => res.json(dbres))
        .catch(err => res.status(422).json(err));
    },

    // update reminders after adding/removing
    updateReminders: async function(req, res) {
        const userID = req.session.passport.user.id;

        db.User.findByIdAndUpdate({ _id: userID }, { $set: { reminders: req.body }})
        .then(dbres => res.json(dbres))
        .catch(err => res.status(422).json(err));
    },

    // update contents of list 1
    updateList1: async function(req, res) {
        const userID = req.session.passport.user.id;

        db.User.findByIdAndUpdate({ _id: userID }, { $set: { list1items: req.body}})
        .then(dbres => res.json(dbres))
        .catch(err => res.status(422).json(err));
    },

    // update contents of list 2
    updateList2: async function(req, res) {
        const userID = req.session.passport.user.id;

        db.User.findByIdAndUpdate({ _id: userID }, { $set: { list2items: req.body}})
        .then(dbres => res.json(dbres))
        .catch(err => res.status(422).json(err));
    },

    // get weather from Open Weather Map API
    getWeather: async function(req, res) {
        const userID = req.session.passport.user.id;
        const weatherKey = process.env.OPEN_WEATHER;

        db.User.findById(userID)
        .then(function(data) {
            let queryZIP = data.location;
            let queryURL = "http://api.openweathermap.org/data/2.5/weather?zip=" + queryZIP + ",us&appid=" + weatherKey;
            request(queryURL, function (err, response, body) {
                if (err) {
                    console.log(err);
                } else {
                    body = JSON.parse(body);
                    // temperature is given in Kelvin, needs to be converted
                    let tempF = Math.round((body.main.temp - 273.15) * (9/5) + 32);
                    let tempF_max = Math.round((body.main.temp_max - 273.15) * (9/5) + 32);
                    let tempF_min = Math.round((body.main.temp_min - 273.15) * (9/5) + 32);

                    let weatherObj = {
                        temp: tempF,
                        temp_max: tempF_max,
                        temp_min: tempF_min,
                        description: body.weather[0].main,
                        city: body.name
                    }
                    db.User.findByIdAndUpdate({ _id: userID },
                        { $set: { weather: weatherObj }})
                        .then(dbres => res.json(dbres))
                        .catch(err => console.log(err));
                }
            });
        })
        .catch(function(err) {
            res.json(err);
        });
    },


    // SETTINGS MENU

    changeZIP: async function(req, res) {
        const userID = req.session.passport.user.id;

        console.log(req.body);

        let newZIP = "";

        for (let key in req.body) {
            newZIP = key;
        }

        db.User.findByIdAndUpdate({ _id: userID }, { $set: { location: newZIP } })
        .then(dbres => res.send(dbres))
        .catch(err => console.log(err));
    },

    changeList1: async function(req, res) {
        const userID = req.session.passport.user.id;

        let newTitle = "";

        for (let key in req.body) {
            newTitle = key;
        }

        db.User.findByIdAndUpdate({ _id: userID }, { $set: { list1title: newTitle} })
        .then(dbres => res.json(dbres))
        .catch(err => console.log(err));
    },

    changeList2: async function(req, res) {
        const userID = req.session.passport.user.id;
        
        let newTitle = "";

        for (let key in req.body) {
            newTitle = key;
        }

        db.User.findByIdAndUpdate({ _id: userID }, { $set: { list2title: newTitle} })
        .then(dbres => res.json(dbres))
        .catch(err => console.log(err));
    }
}