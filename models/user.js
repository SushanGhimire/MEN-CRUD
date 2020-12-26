const express = require("express");
const router = express.Router();
const User = require("../table/user")

router.get('/',async(req,res)=>{
  try{
    const user = await User.find();
    res.json(user);
  }catch(err){
      res.send("error" + err)
  }
});
router.get('/:id',async(req,res)=>{
    try{
      const user = await User.findById(req. params.id);
      res.json(user);
    }catch(err){
        res.send("error" + err)
    }
  });
  router.put('/:id',async(req,res)=>{
    try{
      const user = await User.findById(req.params.id);
      user.sub=req.body.sub;
      const data= await user.save();
      res.json(data); 
    }catch(err){
        res.send("error" + err)
    }
  });
  router.delete('/:id',async(req,res)=>{
    try{
      const user = await User.findById(req.params.id);
      user.sub=req.body.sub;
      const data= await user.remove();
      res.json(data); 
    }catch(err){
        res.send("error" + err)
    }
  });
router.post("/", async(req,res)=>{
    const user = new User({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    });
    try{
        const data = await user.save();
        res.json(data);
    }catch(err){
        console.log("error"+err)
    }
})

module.exports= router;