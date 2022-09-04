const Todo = require('../models/Todo')
const metadata = require('../helpers/metadata')

module.exports = {
    getIndex: async (req,res)=>{
        try {
            const publicTodos = await Todo.find({publicShare:true}).sort([['createdAt', -1]]);
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
    getMain: async (req,res)=>{
        try {
            const publicTodos = await Todo.find({publicShare:true}).sort([['createdAt', -1]]);
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
    }
    
    // getIndex: (req,res)=> {
    //     res.render('index.ejs')
    // }
}
