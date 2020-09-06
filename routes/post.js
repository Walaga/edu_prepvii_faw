const router=require("express").Router()
const {question} = require('../contollers/post')
const {answer} = require('../contollers/answer')


router.route("/post").post(question)

router.route('/answer').post(answer)


module.exports=router