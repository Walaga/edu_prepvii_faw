const pos = require('../model/postSchema')

module.exports = {
    question : async(req,res)=>{
        const ques = new pos({
          question: req.body.question
        })
        try {
            const saved= await ques.save()
            res.status(201).json({"question saved": saved})
        } catch (error) {
          res.status(400).send(error)  
        } 
     }
}