//controlller find schema




const bodyParser = require('body-parser');
const express = require('express');



const {getAllTodoList, createTodo , getTodoById, deleteTodoById, UpdateTodo,getTodoByPriority}=require('./Controller/todo')
const { connectDb }=require('./Config/db')

connectDb();



const app=new express();
app.use(bodyParser.json());

const cors =require("cors")
app.use(cors())

app.get('/api/v2/todo/get/All', getAllTodoList)
app.post('/api/v2/todo', createTodo)
app.get('/api/v2/todo/:id', getTodoById)
app.delete('/api/v2/todo/:id', deleteTodoById)
app.put('/api/v2/todo/update/:id', UpdateTodo)
app.get('/api/v2/todo/get/:priority', getTodoByPriority)

app.listen(8000, ()=>{
    console.log("Server is running...");
})

