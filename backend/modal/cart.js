const mongoose = require('mongoose')
const schema = mongoose.Schema

const user_schemd = new schema({
   cart: [
    {
        title:{
            type:String
        },
        price: {
            type: String
        },
        product_image:{
            type:String
        },
        itemTotal :{
            type: String
        }
    }
   ],
   cartTotal : {
    type : Object
   },
   cartPrice : {
    type: String
   }
   
    
}, {timestamps: true}) 

const Mgn = mongoose.model('cart',user_schemd)

module.exports = Mgn