const mongoose = require ('mongoose')

let schemaAccount = mongoose.Schema({
    
    
    email:String,
    scoreavatar1:Number,
    scoreavatar2:Number,
    scoreavatar3:Number,
    scoreavatar4:Number,
    scoreavatar5:Number,
    scoreavatar6:Number,
   dimandsavatar1:Number,
   dimandsavatar2:Number,
   dimandsavatar3:Number,
   dimandsavatar4:Number,
   dimandsavatar5:Number,
   dimandsavatar6:Number
    
   
})


var Account = mongoose.model('account',schemaAccount)

//var url ='mongodb://localhost:27017/miniprojet'
var url ='mongodb+srv://sakri:98813329@cluster0.iloviui.mongodb.net/?retryWrites=true&w=majority'

exports.testContact=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(
            ()=>{
                
                mongoose.disconnect()
                resolve('connected !')
            }).catch((err)=>reject(err))
    })
}



exports.postNewAccount=(
    email, 
    scoreavatar1,
    scoreavatar2,
    scoreavatar3,
    scoreavatar4,
    scoreavatar5,
    scoreavatar6,
   dimandsavatar1,
   dimandsavatar2,
   dimandsavatar3,
   dimandsavatar4,
   dimandsavatar5,
   dimandsavatar6

)=>{


    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
        
            let account = new Account({

                email:email,
                scoreavatar1:scoreavatar1,
                scoreavatar2:scoreavatar2,
                scoreavatar3:scoreavatar3,
                scoreavatar4:scoreavatar4,
                scoreavatar5:scoreavatar5,
                scoreavatar6:scoreavatar6,
               dimandsavatar1:dimandsavatar1,
               dimandsavatar2:dimandsavatar2,
               dimandsavatar3:dimandsavatar3,
               dimandsavatar4:dimandsavatar4,
               dimandsavatar5:dimandsavatar5,
               dimandsavatar6:dimandsavatar6



            })
             account.save().then((doc)=>{
                mongoose.disconnect()
                resolve(doc)
            }).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })

            }).catch((err)=>reject(err))
    })



}






exports.getAccounts=()=>{


    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
          return  Account.find()
        }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)}).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })      
    })
}

exports.getOneAccount=(id)=>{


    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
          return  Account.findById(id)
        }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)}).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })      
    })
}

exports.getOneAccountByEmail=(email)=>{


    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
          return  Account.find({email:email})
        }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)}).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })       
    })
}

exports.deleteOneAccount=(email)=>{


    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
          return  Account.deleteOne({email:email})
        }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)}).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })       
    })
}


exports.updateOneAccount=(email,
    scoreavatar1,
    scoreavatar2,
    scoreavatar3,
    scoreavatar4,
    scoreavatar5,
    scoreavatar6,
   dimandsavatar1,
   dimandsavatar2,
   dimandsavatar3,
   dimandsavatar4,
   dimandsavatar5,
   dimandsavatar6

)=>{


    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
          return  Account.updateOne({email:email},{
            scoreavatar1:scoreavatar1,
            scoreavatar2:scoreavatar2,
            scoreavatar3:scoreavatar3,
            scoreavatar4:scoreavatar4,
            scoreavatar5:scoreavatar5,
            scoreavatar6:scoreavatar6,
           dimandsavatar1:dimandsavatar1,
           dimandsavatar2:dimandsavatar2,
           dimandsavatar3:dimandsavatar3,
           dimandsavatar4:dimandsavatar4,
           dimandsavatar5:dimandsavatar5,
           dimandsavatar6:dimandsavatar6
        })
        }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)}).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })       
    })
}