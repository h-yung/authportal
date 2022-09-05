const Todo = require('../models/Todo')
const User = require('../models/User')
const metadata = require('../helpers/metadata')

module.exports = {
    getMembers: (req,res)=> {
        res.render('wip.ejs')
    }

    // you can only get to Members area after logging in and arriving at views/todos, the personal page. But ensureAuth is also ahead of getMembers

    // getMembers: async (req,res)=>{
    //     try {
    //         const viewableTodos = await Todo.find(
    //             { $or: [{publicShare:true}, {memberShare:true}]}
    //         )
    //         const totalCompletedTodos = await Todo.countDocuments({completed: true})
    //         res.render('members.ejs',
    //         {
    //             pageinfo: metadata,
    //             memberViewableTodos: viewableTodos,
    //             totalDone: totalCompletedTodos
    //         })
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
    ,
    getTest: async (req,res)=>{
            try {
                const viewableTodos = await Todo.find(
                    { $or: [{publicShare:true}, {memberShare:true}]}
                )
                const totalCompletedTodos = await Todo.countDocuments({completed: true})
                const userWeWant = await User.findById(req.user.id); 
                let profilePic;
                if (userWeWant['profileImg'] === undefined || !userWeWant['profileImg']){
                    profilePic = userWeWant['profileImg']
                } else {
                    // console.log('use default')
                    const defaultUser = await User.findOne({userName:'default'});
                    profilePic = defaultUser['profileImg']
                }
                
                res.render('members.ejs',
                {
                    pageinfo: metadata,
                    memberViewableTodos: viewableTodos,
                    totalDone: totalCompletedTodos,
                    profilePic: profilePic
                })
            }catch(err){
                console.log(err)
            }
        }
    
    // getIndex: (req,res)=> {
    //     res.render('index.ejs')
    // }
}
