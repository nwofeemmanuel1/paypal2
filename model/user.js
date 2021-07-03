const mongoose=require("mongoose")
mongoose.connect("",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("connected to user database"))
.catch(err=>console.log(err.message))

const userSchema=new mongoose.Schema({

})

