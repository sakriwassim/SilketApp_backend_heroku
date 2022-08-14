const route = require('express').Router()

const accountModel = require('../models/account.model')




route.get('/',(req,res,next)=>{
    accountModel.testContect().then((msg)=>res.send(msg)).catch((err)=>res.send(err))
})


route.post('/addaccount',(req,res,next)=>{

    accountModel.postNewAccount( req.body.email, 
        req.body.scoreavatar1,
        req.body.scoreavatar2,
        req.body.scoreavatar3,
        req.body.scoreavatar4,
        req.body.scoreavatar5,
        req.body.scoreavatar6,
        req.body.dimandsavatar1,
        req.body.dimandsavatar2,
        req.body.dimandsavatar3,
        req.body.dimandsavatar4,
        req.body.dimandsavatar5,
        req.body.dimandsavatar6)
    .then((msg)=>res.send(msg))
    .catch((err)=>res.send(err))


})


/**
 * @swagger
 * /accounts
 *  get:
 *      description:getaccounts
 *      responses:
 *      '201':
 *       description: A successful response
 */

route.get('/accounts',(req,res,next)=>{
    accountModel.getAccounts()
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))

})




route.get('/account/:id',(req,res,next)=>{
    accountModel.getOneAccount(req.params.id)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))

})


route.get('/accountByEmail/:email',(req,res,next)=>{
    accountModel.getOneAccountByEmail(req.params.email)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))

})


route.delete('/deleteaccount/:email',(req,res,next)=>{
    accountModel.deleteOneAccount(req.params.email)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))

})

route.patch('/updateaccount/:email',(req,res,next)=>{
    accountModel.updateOneAccount(req.params.email, 
        req.body.scoreavatar1,
        req.body.scoreavatar2,
        req.body.scoreavatar3,
        req.body.scoreavatar4,
        req.body.scoreavatar5,
        req.body.scoreavatar6,
        req.body.dimandsavatar1,
        req.body.dimandsavatar2,
        req.body.dimandsavatar3,
        req.body.dimandsavatar4,
        req.body.dimandsavatar5,
        req.body.dimandsavatar6)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))

})

module.exports=route