const Todo = require('../models/Todo')
const metadata = require('../helpers/metadata')

module.exports = {
    getIndex: async (req,res)=>{
        try {
            const publicTodos = await Todo.find({publicShare:true})
            res.render('index.ejs',
            {
                pageinfo: metadata,
                sharedTodos: publicTodos
            })
        }catch(err){
            console.log(err)
        }
    }
}
