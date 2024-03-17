var express = require('express');
var router = express.Router();
const sha1 = require('sha1')
const OwnerModel = require('../../../models/OwnerModel');
const ParkingLotModel = require('../../../models/ParkingLotModel');
const UserModel = require('../../../models/UserModel');
var QRCode = require('qrcode')

router.post('/login', function(req, res, next){
    let loginname = req.body.loginname;
    let pwd = req.body.password;
  
    OwnerModel.findOne({loginname: loginname}).then(function(ownerUser){
      if(!ownerUser){
        res.json({
          result: "False",
          msg: "ユーザが存在しない"
        });
      }
  
      if(ownerUser.pwd === sha1(pwd)){
        res.json({
          result: "True",
          msg: "ログインしました",
          owner_id: ownerUser._id
        })
      }else{
        res.json({
          result: "False",
          msg: "パスワードが間違った"
        })
      }
    }).catch(next)
  })

  //parking_lotの追加
  router.post('/:owner_id/parking_lots/create', (req, res, next) => {
    var owner_id = req.params.owner_id;
    var parking_lot_name = req.body.parking_lot_name;
    var address = req.body.address;
    var month_fee = req.body.month_fee;
    var park_limit = req.body.park_limit;

    ParkingLotModel.create({
        parking_lot_name: parking_lot_name,
        address: address,
        user_list: [],
        owner_id: owner_id,
        month_fee: month_fee,
        user_count: 0,
        park_limit: park_limit,
        user_rate: 0,
        month_profit: 0
    })
    .then(parkingLot => {
        return OwnerModel.findByIdAndUpdate(
            owner_id,
            { $push: { parking_lot_list: parkingLot._id } },
            { new: true, useFindAndModify: false }
        );
    })
    .then(updatedOwner => {
        res.json({
            result: "Success",
            message: "駐輪場が作成しました",
            updatedOwner: updatedOwner
        });
    })
    .catch(error => {
        console.error("Error:", error);
        res.status(500).json({
            result: "Fail",
            message: "駐輪場の作成が失敗しました"
        });
    });
});

// parking_lot一覧
router.get('/:owner_id/parking_lots', (req, res, next) => {
    var owner_id = req.params.owner_id;
    OwnerModel.findById(owner_id)
    .populate('parking_lot_list')
    .then(ownerUser => {
        res.json({
            parking_lot_list: ownerUser.parking_lot_list
        })
    })
    .catch(error => {
        console.error("駐輪場リストにアクセスができない:", error);
        res.status(500).json({
            result: "Fail",
            message: "駐輪場リストにアクセスできない"
        });
        
    });
})

//駐輪場にユーザを作成する
router.post('/:owner_id/parking_lots/:parking_id/users/create', async (req, res, next) => {
    try {
        const { owner_id, parking_id } = req.params;
        const { loginname, pwd, user_name, bicycle_id } = req.body;

        const user = await UserModel.create({
            loginname: loginname,
            pwd: sha1(pwd),
            user_name: user_name,
            bicycle_id: bicycle_id,
            parking_lot_list: [parking_id],
            qr_code: "(qr_code)"
        });

        const qrcode = await QRCode.toDataURL(user._id.toString());
        user.qr_code = qrcode;
        const updatedUser = await user.save();

        const parkingLot = await ParkingLotModel.findById(parking_id);

        const newUserCount = parkingLot.user_count + 1;
        const monthProfit = newUserCount * parkingLot.month_fee;
        const userRate = (newUserCount / parkingLot.park_limit) * 100;

        await ParkingLotModel.findByIdAndUpdate(
            parking_id,
            { $push: { user_list: updatedUser._id },
              $inc: { user_count: 1 },
              $set: { month_profit: monthProfit, user_rate: userRate } },
            { new: true, useFindAndModify: false }
        );

        await OwnerModel.findByIdAndUpdate(
            owner_id,
            { $push: { user_list: updatedUser._id } },
            { new: true, useFindAndModify: false }
        );

        res.json({
            success: true,
            message: "ユーザが作成しました",
            user: updatedUser
        });
    } catch (error) {
        console.error("ユーザ作成エラー: ", error);
        res.status(500).json({
            success: false,
            message: "ユーザの作成に失敗しました"
        });
    }
});

//オーナー情報
router.get('/:owner_id/details', (req, res, next) => {
    var owner_id = req.params.owner_id;
    OwnerModel.findById(owner_id)
    .populate('user_list')
    .populate('parking_lot_list')
    .then(ownerUser => {
        res.json({
            owner_name : ownerUser.owner_name,
            parking_lot_list : ownerUser.parking_lot_list,
            user_list : ownerUser.user_list
        })
    })
    .catch(error => {
        console.error("オーナー情報にアクセスできない：", error);
        res.status(500).json({
            result: "Fail",
            message: "オーナー情報にアクセスできない"
        });
        
    });
})


//駐輪場の統計一覧
router.get('/:owner_id/parking_lots/statics', async (req, res, next) => {
    try {
        var owner_id = req.params.owner_id;

        const ownerUser = await OwnerModel.findById(owner_id)
                                            .populate('parking_lot_list')
                                            .exec();

        if (!ownerUser) {
            return res.status(404).json({ message: "オーナーが見つかりません" });
        }

        const parkingLotStatics = ownerUser.parking_lot_list.map(parkingLot => {
            return {
                parking_lot_name: parkingLot.parking_lot_name,
                user_rate: parkingLot.user_rate,
                month_profit: parkingLot.month_profit
            };
        });

        res.json(parkingLotStatics);
    } catch (error) {
        console.error("統計情報にアクセスできない:", error);
        res.status(500).json({ message: "統計情報にアクセスできない:" + error });
    }
});



//ownerのユーザリストの一覧
router.get('/:owner_id/users', (req, res, next) => {
    var owner_id = req.params.owner_id;
    OwnerModel.findById(owner_id)
    .populate('user_list')
    .then(ownerUser => {
        res.json({
            user_list: ownerUser.user_list
        })
    })
    .catch(error => {
        console.error("ユーザリストにアクセスができない:", error);
        res.status(500).json({
            result: "Fail",
            message: "ユーザリストにアクセスできない"
        });
    });
})

//ownerの駐輪場のユーザリストの一覧
router.get('/:owner_id/parking_lots/:parking_lot_id/users', (req, res, next) => {
    var {owner_id, parking_lot_id} = req.params;

    ParkingLotModel.findById(parking_lot_id)
    .populate('user_list')
    .then(ParkingLot => {
        res.json({
            user_list: ParkingLot.user_list
        })
    })
    .catch(error => {
        console.error("ユーザリストにアクセスができない:", error);
        res.status(500).json({
            result: "Fail",
            message: "ユーザリストにアクセスできない"
        });
    });
})

module.exports = router;
