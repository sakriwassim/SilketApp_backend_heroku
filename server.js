const express = require("express")
const accountRoute = require('./routers/account.route')
const commandRoute = require('./routers/command.route')
const tripRoute = require('./routers/trip.route')
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',accountRoute)
app.use('/',commandRoute)
app.use('/',tripRoute)


const PORT = process.env.PORT || 3000
app.listen(PORT,()=>console.log('server running on post 3000'))