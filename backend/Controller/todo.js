const Todo = require('../Model/todo')


exports.getAllTodoList = async (req,res)=>{
    try{
        const list=await Todo.find();
        return res.status(200).json({
            data:list,
            length: list.length
        });

    }catch(err){
        res.status(500).json({
            msg:'Internal Server Error'
        })

    }
}


exports.getTodoByPriority = async (req,res)=>{
    try{
        const pri=req.params.priority;
        const prio=await Todo.find({priority:pri});
        console.log(prio);
        return res.status(200).json({
            data:prio,
            length: prio.length
        });

    }catch(err){
        res.status(500).json({
            msg:'Get many :Internal Server Error'
        })

    }
}


exports.createTodo = async (req,res)=>{
    try{
        const newTodo=await Todo.create(req.body);
        return res.status(201).json({
            data:newTodo,
        });

    }catch(err){
        res.status(500).json({
            msg:'Internal Server Error'
        })

    }
}

exports.UpdateTodo = async (req,res)=>{
    try{
        console.log(req.body);
        const {title, priority} = req.body;
        const updateTodo=await Todo.findByIdAndUpdate(req.params.id,{title, priority});
        console.log(updateTodo);

        return res.status(201).json({
            data:updateTodo,
        });

    }catch(err){
        res.status(500).json({
            msg:'Internal Server Error'
        })

    }
}




exports.getTodoById = async (req,res)=>{
    try{
        const todo=await Todo.findById(req.params.id);
        if(todo){

            return res.status(200).json({
                data: todo
            });
        }else{
            return res.status(404).json({
                msg: 'todo not found'
            });
        }

    }catch(err){
        res.status(500).json({
            msg:'Internal Server Error'
        })

    }
}
exports.deleteTodoById = async (req,res)=>{
    try{
        // console.log(req.params.id);
        const todo=await Todo.findById(req.params.id);
        if(todo){
            await Todo.findByIdAndDelete(req.params.id)
            return res.status(200).json({
                msg:"Succcess"
            })
        }else{
            return res.status(404).json({
                msg: 'todo not found'
            });
        }

    }catch(err){
        res.status(500).json({
            msg:'Internal Server Error'
        })

    }
}
