const Comment = require('../models/Comment')
const errorHandler = require('../utils/errorHandler')

module.exports.getByCategoryId = async function (req, res){
    try{
        const comment = await Comment.find({
            post: req.params.postId
        })
        res.status(200).json(comment)

    }
    catch (e){
        errorHandler(res,e)
    }

}
module.exports.create = async function (req, res){
    try{
        const comment = await new Comment({
            text: req.body.text.text,
            author: req.body.author,
            post: req.body.post,

        }).save()

        res.status(201).json(comment)

    }
    catch (e){
        errorHandler(res,e)
    }
}
