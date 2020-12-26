const mongoose= require("mongoose");

const userinfoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:String,
        required:true,
    },
    addr:{
        type:String,
        required:true
    }
});

module.exports= mongoose.model("userinfo", userinfoSchema)