module.exports = function(success, error){

    const mongoose = require('mongoose')
    
    mongoose.set('strictQuery', true)
    
    mongoose.connect('mongodb://127.0.0.1:27017/panda-parking-project')
    
    mongoose.connection.once('open', () => {
        success();
    })
    
    mongoose.connection.once('error', () => {
        console.log('connect failed')
        // error()
    })
    
    mongoose.connection.once('close', () => {
        console.log('connect closed')
    })
    
}