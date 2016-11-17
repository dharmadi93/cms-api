const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Data = new Schema({
    letter: {
        type: String,
        required: true
    },
    frequency: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Data', Data)