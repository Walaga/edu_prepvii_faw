const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    description:String,
    alternatives: [
        {
            text:{
                type:String,
                required:true
            }
        }
    ]
})

module.exports= mongoose.model('Question', QuestionSchema)