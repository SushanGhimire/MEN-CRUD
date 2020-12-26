const express= require("express");
const router = express.Router();
const Userinfo = require("../table/userinfo");

router.get("/", async(req,res)=>{
    try{
        const userinfo= await Userinfo.find();
        res.json(userinfo);
    }catch(err){
        console.log(err);
    }
});
router.post("/", async(req,res)=>{
    const userinfo = new Userinfo({
        name:req.body.name,
        age:req.body.age,
        addr:req.body.addr
    });
    try{
        const userinfos= await userinfo.save();
        res.json(userinfos);
    }catch(err){
        console.log(err);
    }
});
router.get("/:id", async(req,res)=>{
    try{
        const userinfos= await Userinfo.findById(req.params.id);
        res.json(userinfos);
    }catch(err){
        console.log(err);
    }
});
router.put("/:id", async(req,res)=>{
    try{
        const userinfos= await Userinfo.findById(req.params.id);
        userinfos.age= req.body.age;
        const data = await userinfos.save();
        res.json(data);
    }catch(err){
        console.log(err);
    }
});
router.delete("/:id", async(req,res)=>{
    try{
        const userinfos= await Userinfo.findById(req.params.id);
        userinfos.age= req.body.age;
        const data = await userinfos.remove();
        res.json(data);
    }catch(err){
        console.log(err);
    }
});

module.exports=router;