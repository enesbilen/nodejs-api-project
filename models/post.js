const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: false,
        trim: true
    },
    imagePath: {
        type: String,
        default: "",
    },
    date: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('post', PostSchema)