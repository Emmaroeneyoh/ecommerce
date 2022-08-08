const express = require('express')
const mongoose = require('mongoose')
const route = require('./route/route')
const cartroute = require('./route/cart_route')
const  methodOverride = require('method-override')

const app = express()

const base = 'mongodb+srv://emmaro:1234@tutorial.klpqo.mongodb.net/reactblog?retryWrites=true&w=majority'
mongoose.connect(base)
.then((result) => {
    app.listen(4000)
    console.log('commerce server started')
})
.catch((err) => console.log(err))

app.set('view engine', 'ejs')
//
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(methodOverride('_method'));
app.use(route)
app.use(cartroute)