const express = require("express");
const mongoose = require("mongoose");
const url ='mongodb+srv://sushangmi55:sushan987654321@men.zf0xq.mongodb.net/men?retryWrites=true&w=majority'

 const app =express();

 mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
 .then((result)=>{
     console.log("Connected to db......");
     app.listen(8000,()=>{         
         console.log("listening to port 8000");
     });
 }) 
 .catch((error)=>{
     console.log(error)
 });

 app.use(express.json());
 const user= require("./models/user.js");
 app.use("/user", user);
 
 