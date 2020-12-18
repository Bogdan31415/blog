const Post = require('../models/Post')
const errorHandler = require('../utils/errorHandler')


module.exports.getAll = async function (req, res) {
    try {
        const posts = await Post.find()
        res.status(200).json(posts)

    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.getAllByUserId = async function (req, res) {
    try {
        const posts = await Post.find({
            user: req.user.id
        })
        res.status(200).json(posts)

    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.create = async function (req, res){
    const post = await new Post({
        title: req.body.title,
        text: req.body.text,
        user: req.user.id,
        imageSrc: req.file ? req.file.path:''})
    try {
        await post.save()
        res.status(201).json(post)

    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.getById = async function (req, res){
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)

    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.remove = async function (req, res){
    try {
        await Post.remove({_id:req.params.id})
        await Comment.remove({content:req.params.id})
        res.status(200).json({
            message: 'Пост видалено'
        })

    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.update = async function (req, res){
    const updated = {
        title:req.body.title,
        text:req.body.text
    }
    if(req.file){
        updated.imagesrc = req.file.path
    }
    try {
        const category = await Post.findOneAndUpdate(
            {_id: req.params.id},
            {$set: updated},
            {new: true}
        )
        res.status(201).json(category)

    } catch (e) {
        errorHandler(res, e)
    }
}

