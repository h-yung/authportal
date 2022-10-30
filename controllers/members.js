const Todo = require('../models/Todo')
const User = require('../models/User')
const metadata = require('../helpers/metadata')

//maybe call repeated variables here if not specific to logged-in user

module.exports = {

    //strange errors when trying to delete this test page from controller
    getTest: (req,res)=> {
        res.render('wip.ejs')
    },

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
    
    getMembers: async (req,res)=>{
        try {
            //get logged-in user
            const userWeWant = await User.findById(req.user.id); 
            const profilePic = userWeWant['profileImg']

            //get members
            const allMembers = await User.find();
            
            //get members-viewable todos
            const viewableTodos = await Todo.find(
                { $or: [{publicShare:true}, {memberShare:true}]}
            )
            const totalCompletedTodos = await Todo.countDocuments({completed: true})

            res.render('members.ejs',
            {
                pageinfo: metadata,
                allMembers,
                loggedInUser: userWeWant,
                memberViewableTodos: viewableTodos,
                totalDone: totalCompletedTodos,
                profilePic: profilePic
            })
        }catch(err){
            console.log(err)
        }
    },
    getMemberProfile: async (req,res)=>{
        const selectedId = req.params.memberId;
        //check if selectedId is the logged in user. If so, serve the dashboard.
        if (selectedId === req.user.id){
            res.redirect('/todos') 
        }
        //if not, load member indiv page
        const member = await User.findById(selectedId)
        console.log(member.userName)

        //for the members list
        const allMembers = await User.find();

        //personalization stuff for logged-in user
        const userWeWant = await User.findById(req.user.id); 
        const profilePic = userWeWant['profileImg']
        res.render(`member-profile.ejs`, {
            pageinfo: metadata,
            member,
            allMembers,
            loggedInUser: userWeWant,
            profilePic
        })

    }
    
    // getIndex: (req,res)=> {
    //     res.render('index.ejs')
    // }
}
