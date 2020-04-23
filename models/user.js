const mongoose = require('mongoose')

const Availability = mongoose.model('Availability', {
    user_id: {
        type: mongoose.ObjectId,
        required: true,
        trim: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    }
})

module.exports = Availability 