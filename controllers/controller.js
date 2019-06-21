const db = require("../models");
const request = require("request");

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

    getWeather: async function(req, res) {
        const userID = req.session.passport.user.id;

        // remember to add api key to heroku
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
    }
}