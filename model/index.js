const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    short : {
        type : String,
        required : true,
        unique : true
    },
    original : {
        type : String,
        required : true,
        unique : true
    },
    history : [{type : Number}],
    name : {
        type : String
    }
})

const url = mongoose.model('urlShort',userSchema)

module.exports = url