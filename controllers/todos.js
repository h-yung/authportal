// update Model, then Routes, then Controllers

const Todo = require('../models/Todo')
const User = require('../models/User')
const metadata = require('../helpers/metadata')

module.exports = {
    getTodos: async (req,res)=>{
        // console.log(req.user)
        try{
            const todoItems = await Todo.find({userId:req.user.id})
            const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            const userWeWant = await User.findById(req.user.id); 
            const actualDate = userWeWant['lastActiveDate'];

            const profilePic = userWeWant['profileImg']
            
            res.render('todos.ejs', 
                {
                    todos: todoItems, 
                    left: itemsLeft, 
                    user: req.user,
                    profilePic: profilePic,
                    lastActiveDate: actualDate,
                    pageinfo: metadata
                })
        }catch(err){
            console.log(err)
        }
    },
    createTodo: async (req, res)=>{
        try{
            await Todo.create(
                {
                    todo: req.body.todoItem, 
                    completed: false, 
                    userId: req.user.id,
                    memberShare: req.body.memberShare || req.body.publicShare ? true : false,
                    publicShare: req.body.publicShare ? true : false  
                }
            )
            console.log('Todo has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            let doc = await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true,
                // totalHours:{ $divide : [{$subtract: ["updatedAt", "createdAt"]}, 3600000]}
            })
            
            // totalHours is a hidden key
            // console.log(`This many hours to complete ${doc.todo}: ${doc.totalHours}`)
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false,
                timestamps: false //don't want updatedAt changed when marking incomplete
            })
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteTodo: async (req, res)=>{
        // console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    