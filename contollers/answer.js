const answer = require('../model/answerSchema')

module.exports = {
    answer:async(req, res)=>{
        const ans = new answer({
            answer : req.body.answer
        })
        try {
            const saved = ans.save();
            res.status(200).json({reply: saved})
        } catch (error) {
            res.status(400).json({error})
        }
    }
}