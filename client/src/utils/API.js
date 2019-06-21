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

    updateList1: function(items) {
        return axios.put("/api/users/list1", items);
    },

    updateList2: function(items) {
        return axios.put("/api/users/list2", items);
    },

    getWeather: function() {
        return axios.get("/weather");
    },

    changeZIP: function(newZIP) {
        return axios.put("/api/users/location", newZIP);
    },

    changeList1: function(newTitle) {
        return axios.put("/api/users/list1/title", newTitle);
    },

    changeList2: function(newTitle) {
        return axios.put("/api/users/list2/title", newTitle);
    }
}