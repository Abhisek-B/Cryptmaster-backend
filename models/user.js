const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        match: /^\S+@\S+\.\S+$/
    },
    password:{
        type:String,
        required:true
    },
    usdt:{
        type:Number,
    },
    btc:{
        type:Number,
    },
    eth:{
        type:Number,
    },
    xrp:{
        type:Number,
    },
    ltc:{
        type:Number,
    },
    ada:{
        type:Number,
    }
});
module.exports = mongoose.model('userdata',userSchema)