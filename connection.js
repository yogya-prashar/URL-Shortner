const mongoose = require('mongoose')

async function connnectDb(path){
    mongoose.connect(path)
    .then(() => console.log("mongoDb Connected"))
    .catch((err) => console.log(err))
}

module.exports = connnectDb