const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://playground:desolidboy1@cluster0.vnuog.mongodb.net/paypal",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("connected to user database"))
.catch(err=>console.log(err.message))

const userSchema=new mongoose.Schema({
    phone:{
        type:String,
       
    },
    
email:{
    type:String,
    required:true
},

firstName: {
 type: String,
 required:true
},

lastName:{
type:String,
required:true
},

password:{
    type:String,
    required:true
}


})

const User=mongoose.model("user",userSchema)
module.exports=User

