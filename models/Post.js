const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    title :{
        type: String,
        required : true
    },
    text :{
        type: String,
        required : true
    },
    imageSrc:{
        type: String,
        default: ''
    },
    user:{
        ref: 'users',
        type: Schema.ObjectId
    }

})
module.exports = mongoose.model('posts', categorySchema)
