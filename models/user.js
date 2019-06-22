const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
const UserSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  location: { type: String , default: "10003"},
  tasks: [
    {
      title: { type: String, required: true },
      dateCreated: { type: Date, default: Date.now },
      dueDate: { type: String, default:moment().format("MM-DD-YYYY") },
      dueTime: { type: String, default:moment().format("hh:mm A") },
      steps: []
    }
  ],
  reminders: [],
  list1title: { type: String, required: true, default: "List 1" },
  list1items: [],
  list2title: { type: String, required: true, default: "List 2" },
  list2items: [],
  weather: {
    temp: { type: String },
    temp_max: { type: String },
    temp_min: { type: String },
    description: { type: String },
    city: { type: String }
  },
  timerSettings: {
    workInterval: { type: Number, required: true, default: 25 },
    breakInterval: { type: Number, required: true, default: 5 },
    workCycles: { type: Number, required: true, default: 4 },
  }
});

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("User", UserSchema);

module.exports = User;