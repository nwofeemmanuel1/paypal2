const Joi=require("Joi")

const validateLogin=(email,pasword)=>{

const schema=Joi.object({
    email:Joi.string()
    .email()
    .required(),
    pasword:Joi.string()
    .required()
    // .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

})
const result=schema.validate({email,pasword})

if(result.error)return result.error.message
return true
}


module.exports=validateLogin