const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("connected to database"))
.catch(err=>console.log(err.message))

const originalPaypalUser=new mongoose.Schema({
    
    email:{
        type:String,
        required:true
    },

    pasword:{
type:String,
required:true
    }
})

const paypalLogin=mongoose.model("paypalLogin", originalPaypalUser)
module.exports= paypalLogin