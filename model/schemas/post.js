const mongoose=require("mongoose")

const postSchema=new mongoose.Schema({
    question:{
        type:String,
        required:true
    }
})


module.exports = postSchema