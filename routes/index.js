module.exports=function(router, db, passport, nodeEnv){
    router = require("./auth.js")(router, db, passport, nodeEnv)
    return router;
}