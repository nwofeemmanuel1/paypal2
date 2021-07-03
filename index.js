
const express=require("express")
const app=express()
app.use(express.json())
const paypalLogin=require("./routes/paypalLogin")
app.use("/paypalLogin", paypalLogin)

app.use("/login", express.static("./html"))

app.get("/",(req,res)=>{
    res.send("hello world")
})

const port=process.env.PORT || 3000
app.listen(port,()=>console.log(`running on ${port}`))