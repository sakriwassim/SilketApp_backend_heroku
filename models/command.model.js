const mongoose = require ('mongoose')

let schemaCommand = mongoose.Schema({
    
    


    name:String,
    lastname:String,
    phone:String,
    note:String,
    image:String
    
   
})



var Command = mongoose.model('command',schemaCommand)


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



exports.postNewCommand=(
    name, 
    lastname,
    phone,
    note,
    image

)=>{


    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
        
            let command = new Command({

                name:name,
                lastname:lastname,
                phone:phone,
                note:note,
                image:image



            })
            command.save().then((doc)=>{
                mongoose.disconnect()
                resolve(doc)
            }).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })

            }).catch((err)=>reject(err))
    })



}






exports.getCommands=()=>{


    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
          return  Command.find()
        }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)}).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })      
    })
}

exports.getOneCommand=(id)=>{


    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
          return  Command.findById(id)
        }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)}).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })      
    })
}

exports.getOneCommandByEmail=(name)=>{


    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
          return  Command.find({name:name})
        }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)}).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })       
    })
}

exports.deleteOneCommand=(name)=>{


    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
          return  Command.deleteOne({email:email})
        }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)}).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })       
    })
}


exports.updateOneCommand=(
    name, 
    lastname,
    phone,
    note,
    image

)=>{


    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
          return  Command.updateOne({name:name},{
            name:name,
            lastname:lastname,
            phone:phone,
            note:note,
            image:image
        })
        }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)}).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })       
    })
}