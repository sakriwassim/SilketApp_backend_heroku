const route = require('express').Router()

const tripModel = require('../models/trip.model')



route.get('/',(req,res,next)=>{
    tripModel.testContect().then((msg)=>res.send(msg)).catch((err)=>res.send(err))
})


route.post('/addtrip',(req,res,next)=>{

    tripModel.postNewTrip( 

        req.body.driverimage,
        req.body.drivername,
        req.body.driverlastname,
        req.body.startaddress,
        req.body.arrivaladdress,
        req.body.startdate,
        req.body.arrivaldate,
        req.body.notetrip
        )
    .then((msg)=>res.send(msg))
    .catch((err)=>res.send(err))


})



route.get('/trips',(req,res,next)=>{
    tripModel.getTrips()
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))

})




route.get('/trip/:id',(req,res,next)=>{
    tripModel.getOneTrip(req.params.id)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))

})


route.get('/tripByName/:drivername',(req,res,next)=>{
    tripModel.getOneTripByName(req.params.drivername)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))

})


route.delete('/deletetrip/:drivername',(req,res,next)=>{
    tripModel.deleteOneTrip(req.params.drivername)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))

})

route.patch('/updatetrip/:drivername',(req,res,next)=>{
    tripModel.updateOneTrip( 
        req.body.driverimage,
        req.body.drivername,
        req.body.driverlastname,
        req.body.startaddress,
        req.body.arrivaladdress,
        req.body.startdate,
        req.body.arrivaldate,
        req.body.notetrip
        
        )
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))

})

module.exports=route
