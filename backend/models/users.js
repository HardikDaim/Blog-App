const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    blogs : [{
        type:mongoose.Types.ObjectId,
        ref : 'Blogs'
    }],
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model("Users", userSchema);