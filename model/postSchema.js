const mongoose=require("mongoose")
const post=require("./schemas/post")


const pos = mongoose.model("post",post)



module.exports = pos