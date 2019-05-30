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
    }
}