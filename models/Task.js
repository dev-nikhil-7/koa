const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TaskSchema = new Schema({
  task_name: String
});
module.exports = Task = mongoose.model("tasks", TaskSchema);
