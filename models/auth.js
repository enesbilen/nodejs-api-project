const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('auth', AuthSchema)