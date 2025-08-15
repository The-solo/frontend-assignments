const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://solo:BVYtfIXk9jnjXpi9@test-database.lggem8r.mongodb.net/todos');
//In realworld Application, Put this into '.env' file.


const TodoSchema = new mongoose.Schema({
  name : String,
  description :String,
  completed : Boolean
});

const todo = mongoose.model('todos', TodoSchema);

module.exports = {
  todo : todo
}
