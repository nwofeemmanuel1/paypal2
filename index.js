
const express=require("express")
const app=express()
app.use(express.json())
const loginUser=require("./routes/login.js")
const user=require("./routes/user")
app.use("/signup",user)
app.use("/login",loginUser)
app.use("/",express.static("./paypalHtml"))
// app.get("/",(req,res)=>{
//     res.send("hello world")
// })

const port=process.env.PORT || 3000
app.listen(port,()=>console.log(`running on ${port}`))