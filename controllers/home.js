const Todo = require('../models/Todo')
const User = require('../models/User')
const metadata = require('../helpers/metadata')

module.exports = {
    getIndex: async (req,res)=>{
        try {
            const publicTodos = await Todo.find({publicShare:true}).sort([['createdAt', -1]]).limit( 5 );
            const totalDone = await Todo.countDocuments({completed: true});
            const publicDoneDos = await Todo.find({publicShare:true, completed: true})

            const firstDone = publicDoneDos[Math.floor(Math.random()*publicDoneDos.length)]
            const secondDone = publicDoneDos[Math.floor(Math.random()*publicDoneDos.length)]

            console.log(publicDoneDos)
            console.log(publicDoneDos[0]['totalHours'])

            res.render('index.ejs',
            {
                pageinfo: metadata,
                sharedTodos: publicTodos,
                publicDoneDos,
                totalDone,
                firstDone,
                secondDone
            })
        }catch(err){
            console.log(err)
        }
    },
    // if logged in
    getMain: async (req,res)=>{
        try {
            const publicTodos = await Todo.find({publicShare:true}).sort([['createdAt', -1]]).limit( 5 );
            const totalDone = await Todo.countDocuments({completed: true});
            const publicDoneDos = await Todo.find({publicShare:true, completed: true})

            const firstDone = publicDoneDos[Math.floor(Math.random()*publicDoneDos.length)]
            const secondDone = publicDoneDos[Math.floor(Math.random()*publicDoneDos.length)]

            console.log(publicDoneDos)
            console.log(publicDoneDos[0]['totalHours'])

            res.render('main.ejs',
            {
                pageinfo: metadata,
                sharedTodos: publicTodos,
                publicDoneDos,
                totalDone,
                firstDone,
                secondDone
            })
        }catch(err){
            console.log(err)
        }
    },
    updateProfile: async (req, res) => {
        try{
            await User.findByIdAndUpdate(
                req.user.id, 
                {
                    userName: req.body.userName,
                    profileImg: req.body.profileImg,
                    email: req.body.email
                // no password update option at the moment
                }
            )
            // //get user ID
            // //send user ID along with form information:
            // // userName
            // //profileImg
            // // email
            // // confirmPassword - which is atypical as usually you need to enter current PW, and new pw 2x

            // console.log(`user id is ${req.user.id}`)
            // console.log('user updated')
            console.log('uhhh')
            res.redirect('/todos')

        }catch(err){
            console.log(err)
        }
    }
    

    // getIndex: (req,res)=> {
    //     res.render('index.ejs')
    // }
}
