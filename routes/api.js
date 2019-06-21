module.exports = function(router, db, passport, nodeEnv) {
    // const router = require("express").Router();
    const controller = require("../controllers/controller");

    router.route("/users").get(controller.getUserData);

    router.route("/users/tasks").put(controller.updateTasks);

    router.route("/users/reminders").put(controller.updateReminders);

    router.route("/users/list1").put(controller.updateList1);

    router.route("/users/list2").put(controller.updateList2);

    router.route("/weather").get(controller.getWeather);

    router.route("/users/location").put(controller.changeZIP);

    router.route("/users/list1/title").put(controller.changeList1);

    router.route("/users/list2/title").put(controller.changeList2);
    
    return router;
}