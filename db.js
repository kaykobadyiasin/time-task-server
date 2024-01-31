const mongoose = require('mongoose')


const dbUri = 'mongodb+srv://AireProTask:fctVf4uFzfiQgIRT@cluster0.0iwmvh7.mongodb.net/AireProTask?retryWrites=true&w=majority'

module.exports = () => {
    return mongoose.connect(dbUri)
}