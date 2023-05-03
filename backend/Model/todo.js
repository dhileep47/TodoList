const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: String,
    priority:String,
})


module.exports = mongoose.model('Todo',TodoSchema);