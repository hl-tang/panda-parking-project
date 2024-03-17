const mongoose = require('mongoose');

let OwnerSchema = new mongoose.Schema({
    loginname: {
        type: String,
        required: true,
        unique: true
    },
    pwd: {
        type: String,
        required: true
    },
    owner_name: {
        type: String,
        required: true
    },
    parking_lot_list: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ParkingLot'
    }],
    user_list: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

let OwnerModel = mongoose.model('Owner', OwnerSchema);

module.exports = OwnerModel;