module.exports = function(router, db, passport, nodeEnv) {
    // const router = require("express").Router();
    const controller = require("../controllers/controller");

    router.route("/users").get(controller.getUserData);

    router.route("/users/tasks").put(controller.updateTasks);

    router.route("/users/reminders").put(controller.updateReminders);

    router.route("/users/dailygoals").put(controller.updateDailyGoals);

    router.route("/users/weeklygoals").put(controller.updateWeeklyGoals);

    router.route("/users/monthlygoals").put(controller.updateMonthlyGoals);
    
    return router;
}