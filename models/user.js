const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
const UserSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
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
  dailyGoals: [],
  weeklyGoals: [],
  monthlyGoals: []
});

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("User", UserSchema);

module.exports = User;