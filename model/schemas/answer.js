const mongoose = require("mongoose")
//const post = require("../../contollers/post")

const answer = mongoose.Schema({
    answer:{
        type: String,
        required: true
    },
    to:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'post',
        required: true
    }]
})

module.exports = answer