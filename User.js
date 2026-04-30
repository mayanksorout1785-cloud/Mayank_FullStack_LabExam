const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    gender: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    coursesEnrolled: [
        {
            courseName: String
        }
    ]
});

module.exports = mongoose.model('User', userSchema);