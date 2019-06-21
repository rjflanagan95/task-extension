const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
const UserSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  location: { type: String, required: true, default: "10003" },
  tasks: [
    {
      title: { type: String, required: true },
      dateCreated: { type: Date, default: Date.now },
      dueDate: { type:String, default:moment().format("MM-DD-YYYY") },
      dueTime: { type:String, default:moment().format("hh:mm A") },
      steps: []
    }
  ],
  reminders: [],
  list1: {
    title: {type: String, required: true, default: "List 1"},
    items: []
  },
  list2: {
    title: {type: String, required: true, default: "List 2"},
    items: []
  },
  weather: {
    temp: { type: String },
    temp_max: { type: String },
    temp_min: { type: String },
    description: { type: String },
    city: { type: String }
  }
});

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("User", UserSchema);

module.exports = User;