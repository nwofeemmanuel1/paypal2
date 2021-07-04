const mongoose=require("mongoose")
const User=require("./user")
mongoose.connect("mongodb://localhost:27017/card",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("connected to credicard database"))
.catch(err=>console.log(err))

const creditCardSchema=new mongoose.Schema({
    cardNumber:{
        type:Number,
        required:true,
        
    },
    type:{
        enum:["Visa","Mastercard","Discover","American express"]
    },
    csv:{
        type:Number,
        maxLength:5,
        required:true
    },
    expiryDate:{
        type:Date,
        required:true
    },
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
}

})

const creditCard=mongoose.model("creditcard",creditCardSchema)
module.exports=creditCard