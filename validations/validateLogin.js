const Joi=require("Joi")

const validateLogin=(req)=>{

const schema=Joi.object({
  phone:Joi.number(),

    email:Joi.string()
    .email()
    .required(),

    firstName:Joi.string()
    .required(),

    lastName:Joi.string()
    .required(),

    password:Joi.string()
    .required()
      // .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

})
const result=schema.validate({phone:req.phone,email :req.email, firstName:req.firstName,lastName:req.lastName, password:req.password})
if(result.error)return result.error.message
return true
}



module.exports=validateLogin