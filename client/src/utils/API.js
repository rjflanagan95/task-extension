import axios from "axios";

export default {
    getUserData: function() {
        return axios.get("/api/users");
    },

    // addTask: function(task) {
    //     return axios.post("/api/users/tasks");
    // }
}