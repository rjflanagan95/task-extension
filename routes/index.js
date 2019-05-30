module.exports=function(router, db, passport, nodeEnv){
    const apiRoutes = require("./api")(router, db, passport, nodeEnv);
    const authRoutes = require("./auth")(router, db, passport, nodeEnv);

    router.use("/api", apiRoutes);
    router.use("auth", authRoutes);
    return router;
}