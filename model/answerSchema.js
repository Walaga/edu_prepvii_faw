const mongoose = require('mongoose')
const answerSchema = require('./schemas/answer')

const answer = mongoose.model("answer", answerSchema)

module.exports = answer