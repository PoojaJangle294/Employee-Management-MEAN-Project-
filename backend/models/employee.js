const mongoose=require('mongoose')
var Employee=mongoose.model('Employee',{
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    empid:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    jndate:{
        type:String,
        required:true
    },
    dob:{
        type:String
    },
    state:{
        type:String
    }
    
},'employee');

module.exports={Employee};