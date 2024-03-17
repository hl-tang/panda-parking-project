var express = require('express');
var router = express.Router();
const sha1 = require('sha1')
const AdminModel = require('../../../models/AdminModel');
const OwnerModel = require('../../../models/OwnerModel');
/* GET home page. */
router.get('/', function(req, res, next) {

});


router.post('/login', function(req, res, next){
  let loginname = req.body.loginname;
  let pwd = req.body.password;

  AdminModel.findOne({loginname: loginname}).then(function(adminUser){
    if(!adminUser){
      res.json({
        result: "False",
        msg: "ユーザが存在しない"
      });
    }

    if(adminUser.pwd === sha1(pwd)){
      res.json({
        result: "True",
        msg: "ログインしました"
      })
    }else{
      res.json({
        result: "False",
        msg: "パスワードが間違った"
      })
    }
  }).catch(next)
})

  //ownerの作成
  router.post('/owners/create', (req, res, next) => {
    var loginname = req.body.loginname;
    var pwd = req.body.pwd;
    var owner_name = req.body.owner_name;
  
    OwnerModel.create({
      loginname: loginname,
      pwd: sha1(pwd),
      owner_name: owner_name,
      parking_lot_list: [],
      user_list: []
    })
    .then(owner => {
      res.json({
        result: "Success",
        message: "オーナー作成しました。",
        owner: owner
      });
    })
    .catch(error => {
      console.error("Error: ", error);
      res.status(500).json({
        result: "Fail",
        message: "オーナー作成が失敗しました。"
      });
    });
  });
  
module.exports = router;
