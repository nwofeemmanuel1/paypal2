const express=require("express")
const validateLogin=require("../validations/validateLogin")
const User=require("../model/user")
const router=express.Router()

router.post("/paypal",async(req,res)=>{
const isvalid=validateLogin(req.body)
  if(isvalid===true){
      try{
const user=await new User({
    email:req.body.email,
    password:req.body.password
})
const result=await user.save()
return res.json({error:false,message:result})


      }catch(err){
          return res.json({error:true,errMessage:"invalid email or pasword"})
      }

}
else
res.json({error:true,errMessage:isvalid})

})



router.post("/",async(req,res)=>{

const isvalid=validateLogin(req.body)
if(isvalid===true){
const user=await User.findOne({email:req.body.email,password:req.body.password})
if(user){
res.json({error:false,message:{token:""}})
}else
res.json({error:false,errMessage:"invalid Email or Password"})

}

else
res.json({error:true,errMessage:isvalid})

})


module.exports=router