import axios from "axios";

export default {
    getUserData: function() {
        return axios.get("/api/users");
    }
}