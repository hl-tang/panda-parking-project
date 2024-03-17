const mongoose = require('mongoose');

let ParkingLotSchema = new mongoose.Schema({
    parking_lot_name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    user_list: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Owner',
        required: true
    },
    month_fee: {
        type: Number,
        required: true
    },
    user_count: {
        type: Number,
        required: true
    },
    park_limit: {
        type: Number,
        required: true
    },
    user_rate: {
        type: Number,
        required: true
    }
    ,
    month_profit: {
        type: Number,
        required: true
    }
});

let ParkingLotModel = mongoose.model('ParkingLot', ParkingLotSchema);

module.exports = ParkingLotModel;
