const mongoose = require('mongoose')


module.exports = mongoose.model('task', new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        status: { type: String, required: true },
    },
    {
        timestamps: true
    }
));