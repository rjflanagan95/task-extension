module.exports = function(router, db, passport, nodeEnv) {
  router.get("/auth/google",
    (req, res, next) => {
      if (req.query.return) {
        req.session.oauth2return = req.query.return;
      }
      console.log("hit auth route")
      next();
    },
    passport.authenticate("google", {
      scope: ["email", "profile"]
    })
  );

  router.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        console.log("~~~~successfully hit callback route~~~~~~")
      res.redirect('/');
    });

  return router;
  }