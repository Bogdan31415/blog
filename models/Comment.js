const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    text :{
        type: String,
        required : true
    },
    author :{
        type: String,
        required : false
    },
    post:{
        ref: 'posts',
        type: Schema.ObjectId
    },
    user:{
        ref: 'users',
        type: Schema.ObjectId
    }

})
module.exports = mongoose.model('comments', categorySchema)
