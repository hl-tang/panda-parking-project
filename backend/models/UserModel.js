const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    loginname:{
        type: String,
        required: true,
        unique: true
    },
    pwd: {
        type: String,
        required: true
    },
    user_name: {
        type: String,
        required: true
    },
    bicycle_id: {
        type: String,
        required: true
    },
    qr_code: {
        type: String,
        required: true
    },
    parking_lot_list: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ParkingLot'
    }]
});

let UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
