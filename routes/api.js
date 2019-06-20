module.exports = function(router, db, passport, nodeEnv) {
    // const router = require("express").Router();
    const controller = require("../controllers/controller");

    router.route("/users").get(controller.getUserData);

    router.route("/users/tasks").put(controller.updateTasks);

    router.route("/users/reminders").put(controller.updateReminders);

    router.route("/users/list1").put(controller.updateList1);

    router.route("/users/list2").put(controller.updateList2);
    
    return router;
}