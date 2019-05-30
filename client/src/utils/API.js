import axios from "axios";

export default {
    getUserData: function() {
        return axios.get("/api/users");
    },

    updateTasks: function(task) {
        return axios.put("/api/users/tasks", task);
    }
}