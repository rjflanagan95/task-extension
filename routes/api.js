module.exports = function(router, db, passport, nodeEnv) {
    // const router = require("express").Router();
    // const controller = require("../controllers/controller")(db);

    router.get("/api/users", function(req, res) {
        db.User.findById(req.session.passport.user.id)
        .then(function(data) {
            res.send(data);
        })
        .catch(function(err) {
            res.json(err);
        });
    });

    return router;
}