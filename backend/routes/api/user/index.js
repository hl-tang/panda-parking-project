var express = require('express');
var router = express.Router();
const sha1 = require('sha1')
const AdminModel = require('../../../models/AdminModel');
const OwnerModel = require('../../../models/OwnerModel');
const UserModel = require('../../../models/UserModel');
/* GET home page. */
router.get('/', function(req, res, next) {

});


router.post('/login', function(req, res, next){
  let loginname = req.body.loginname;
  let pwd = req.body.password;

  UserModel.findOne({loginname: loginname}).then(function(user){
    if(!user){
      res.json({
        result: "False",
        msg: "ユーザが存在しない"
      });
    }

    if(user.pwd === sha1(pwd)){
      res.json({
        result: "True",
        msg: "ログインしました",
        user_id: user._id
      })
    }else{
      res.json({
        result: "False",
        msg: "パスワードが間違った"
      })
    }
  }).catch(next)
})

//ユーザ個人情報
router.get('/:user_id/details', (req, res, next) => {
    var user_id = req.params.user_id;

    UserModel.findById(user_id)
    .populate('parking_lot_list')
    .then(user => {
        if (user) {
            res.json({
                success: true,
                user: user
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'ユーザが見つかりません'
            });
        }
    })
});

  
module.exports = router;
