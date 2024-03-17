const mongoose = require('mongoose');

let AdminSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    loginname:{
        type: String,
        required: true,
        unique: true
    },
    pwd: {
        type: String,
        required: true
    }
    // chief_list: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Chief'
    // }],
    // parking_lot_list: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'ParkingLot'
    // }],
    // user_list: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }]
});

let AdminModel = mongoose.model('Admin', AdminSchema);

module.exports = AdminModel;
