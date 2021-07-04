const express=require("express")
const User=require("../model/user")
const genToken=require("../tokens/genToken")
const validateUser=require("../validations/validateLogin")
const router=express.Router()

router.post("/",async(req,res)=>{
const isvalid=validateUser(req.body)
if(isvalid===true){

try{
    const user=await new User({
        phone:req.body.phone,
        email:req.body.email,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        password:req.body.password
    })
const result=await user.save()
const token=genToken(result._id)
res.json({error:false, message:result,token})

}
catch(err){
    res.json({error:true,errMessage:err.message})
}
}else
res.json({error:true,errMessage:isvalid})
})

module.exports=router