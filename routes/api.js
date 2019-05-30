module.exports = function(router, db, passport, nodeEnv) {
    router.get("/api/users", function(req, res) {
        db.User.findById(req.session.passport.user.id)
        .then(function(data) {
            console.log(data);
        })
        .catch(function(err) {
            res.json(err);
        });
    });

    return router;
}