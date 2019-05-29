module.exports =()=>{
  const mongoose = require("mongoose");
  const Schema = mongoose.Schema;
  
  // Using the Schema constructor, create a new NoteSchema object
  // This is similar to a Sequelize model
  const userSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    tasks: [],
    reminders: [],
    goals: []
  });
  
  // This creates our model from the above schema, using mongoose's model method
  const User = mongoose.model("User", userSchema);
  return User;
}
