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
   },
   username : {
    type: String
   },
   email : {
    type: String
   },
   transactionID : {
    type: String
   },
text_ref: {
    type: String
   },
   
    
}, {timestamps: true}) 

const Mgn = mongoose.model('invoice',user_schemd)

module.exports = Mgn