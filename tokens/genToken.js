const jwt=require("jsonwebtoken")

const gentoken=(userId)=>{

const token=jwt.sign({userId},"jwtPrivateKey")
return token

}

module.exports=gentoken