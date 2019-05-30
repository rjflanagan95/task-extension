module.exports = function(router, db, passport, nodeEnv) {
    // const router = require("express").Router();
    // const controller = require("../controllers/controller")(db);

    router.get("/api/users", function(req, res) {
        db.User.findById(req.session.passport.user.id)
        .then(function(data) {
            console.log(data);
            res.send(data);
        })
        .catch(function(err) {
            res.json(err);
        });
    });

    return router;
}

// const router = require("express").Router();
// const controller = require("../controllers/controller");

// router.route("/api/users").get(controller.getUserData);

// module.exports = router;