const mongoose = require('mongoose')
const schema = mongoose.Schema

const user_schemd = new schema({
    title:{
        type:String
    },
    price:{
        type:String
    },
    product_image :{
        type:String
    },
   
    
}, {timestamps: true}) 

const Mgn = mongoose.model('product',user_schemd)

module.exports = Mgn