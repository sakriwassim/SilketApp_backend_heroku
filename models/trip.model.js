const mongoose = require ('mongoose')

let schemaTrip = mongoose.Schema({
    
    
    driverimage:String,
    drivername:String,
    driverlastname:String,
    startaddress:String,
    arrivaladdress:String,
    startdate:String,
    arrivaldate:String,
    notetrip:String
   
   
})



var Trip = mongoose.model('trip',schemaTrip)


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



exports.postNewTrip=(
    driverimage,
    drivername,
    driverlastname,
    startaddress,
    arrivaladdress,
    startdate,
    arrivaldate,
    notetrip

)=>{


    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
        
            let trip = new Trip({

                driverimage:driverimage,
    drivername:drivername,
    driverlastname:driverlastname,
    startaddress:startaddress,
    arrivaladdress:arrivaladdress,
    startdate:startdate,
    arrivaldate:arrivaldate,
    notetrip:notetrip
                
        

            })
            trip.save().then((doc)=>{
                mongoose.disconnect()
                resolve(doc)
            }).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })

            }).catch((err)=>reject(err))
    })



}






exports.getTrips=()=>{


    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
          return  Trip.find()
        }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)}).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })      
    })
}

exports.getOneTrip=(id)=>{


    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
          return  Trip.findById(id)
        }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)}).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })      
    })
}

exports.getOneTripByName=(drivername)=>{


    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
          return  Trip.find({drivername:drivername})
        }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)}).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })       
    })
}

exports.deleteOneTrip=(drivername)=>{


    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
          return  Trip.deleteOne({drivername:drivername})
        }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)}).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })       
    })
}


exports.updateOneTrip=(
 
    driverimage,
    drivername,
    driverlastname,
    startaddress,
    arrivaladdress,
    startdate,
    arrivaldate,
    notetrip

)=>{


    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
          return  Command.updateOne({drivername:drivername},{
            driverimage:driverimage,
    drivername:drivername,
    driverlastname:driverlastname,
    startaddress:startaddress,
    arrivaladdress:arrivaladdress,
    startdate:startdate,
    arrivaldate:arrivaldate,
    notetrip:notetrip
        })
        }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)}).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })       
    })
}