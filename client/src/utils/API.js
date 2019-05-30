import axios from "axios";

export default {
    getUserData: function() {
        return axios.get("/api/users");
    },

    updateTasks: function(tasks) {
        return axios.put("/api/users/tasks", tasks);
    },

    updateReminders: function(reminders) {
        return axios.put("/api/users/reminders", reminders);
    },

    updateDailyGoals: function(goals) {
        return axios.put("/api/users/dailygoals", goals);
    },

    updateWeeklyGoals: function(goals) {
        return axios.put("/api/users/weeklygoals", goals);
    },

    updateMonthlyGoals: function(goals) {
        return axios.put("/api/users/monthlygoals", goals);
    }
}