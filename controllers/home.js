const metadata = require('../helpers/metadata')

module.exports = {

    
    getIndex: (req,res)=>{
        res.render('index.ejs',
            {
                pageinfo: metadata
            }
        )
    }
}
