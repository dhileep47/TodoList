
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');


const {getAllTodoList, createTodo , getTodoById, deleteTodoById, UpdateTodo,getTodoByPriority} = require('./Controller/todo')


const app=new express();
app.use(bodyParser.json());

const cors =require("cors")
app.use(cors())

const MONGO_URI = "mongodb+srv://dhileepmongo:dhileep1234@todolist.avtps17.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"

mongoose.connect(MONGO_URI)
.then(()=>{
    app.listen(8000, ()=>{
    console.log("Server is running...");
    })
})
.catch((err)=>{
    console.log(err);
})

app.get('/api/v2/todo/get/All', getAllTodoList)
app.post('/api/v2/todo', createTodo)
app.get('/api/v2/todo/:id', getTodoById)
app.delete('/api/v2/todo/:id', deleteTodoById)
app.put('/api/v2/todo/update/:id', UpdateTodo)
app.get('/api/v2/todo/get/:priority', getTodoByPriority)


