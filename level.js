const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const cors=require("cors")
const route=require("./routes/post")

dotenv.config()


const app=express()
app.use(cors) 
app.use(express.json())

app.use(route)


mongoose.connect(process.env.local,{useNewUrlParser:true,
useUnifiedTopology:true,useFindAndModify:false})

var db=mongoose.connection

db.once("open",()=>{
    console.log("db up and running")
})

db.on("error",()=>{
    console.log("connection failed")
})



app.listen(5000,()=>{
    console.log(`we are listening on port 3000`)
})
