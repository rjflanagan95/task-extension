module.exports = function(router, db, passport, nodeEnv) {
  router.get("/auth/google",
    (req, res, next) => {
      if (req.query.return) {
        req.session.oauth2return = req.query.return;
      }
      next();
    },
    passport.authenticate("google", {
      scope: ["email", "profile"]
    })
  );

  // router.get("/auth/google", passport.authenticate("google", {scope: ["email", "profile"]}));

  router.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    }
  );

  router.get("/auth/logout", (req,res) => {
    req.session.passport = null;
    res.redirect("/login");
  });

  return router;
  }