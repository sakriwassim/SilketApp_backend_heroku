const route = require('express').Router()

const commandModel = require('../models/command.model')



route.get('/',(req,res,next)=>{
    commandModel.testContect().then((msg)=>res.send(msg)).catch((err)=>res.send(err))
})


route.post('/addcommand',(req,res,next)=>{

    commandModel.postNewCommand( 
        req.body.name,
        req.body.lastname,
        req.body.phone,
        req.body.note,
        req.body.image)
    .then((msg)=>res.send(msg))
    .catch((err)=>res.send(err))


})



route.get('/commands',(req,res,next)=>{
    commandModel.getCommands()
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))

})




route.get('/command/:id',(req,res,next)=>{
    commandModel.getOneCommand(req.params.id)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))

})


route.get('/commandByName/:name',(req,res,next)=>{
    commandModel.getOneCommandByName(req.params.name)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))

})


route.delete('/deletecommand/:name',(req,res,next)=>{
    commandModel.deleteOneCommand(req.params.name)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))

})

route.patch('/updatecommand/:name',(req,res,next)=>{
    commandModel.updateOneCommand( 
        req.body.name,
        req.body.lastname,
        req.body.phone,
        req.body.note,
        req.body.image)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))

})

module.exports=route
