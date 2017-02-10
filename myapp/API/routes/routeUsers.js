
var express = require('express')
  , router = express.Router()

var user = require('../models/users');


router.get('/:username/:password', function(req, res) {
  user.findUser(req.params.username, req.params.password, function(err, users) {
    res.send(users);
  })
})


// router.get('/', function(req, res, next) {
//   user.find(function (err, users) {
//     if (err) return next(err);
//     res.json(users);
//   });
// });

// router.get('/:username', function(req, res, next) {
//   user.FindUserByUsername(req.params.username, function (err, users) {
//     if (err) return next(err);
//     console.log(users);
//     res.send(users);
//   });
// });

// /* POST /users */
// router.post('/:username', function(req, res, next) {
//   user.UpdateUserPassword(req.params.username, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// /* POST /users */
// router.post('/', function(req, res, next) {
//   user.create(req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// router.delete('/:username', function(req, res, next) {
//   user.DeleteUser(req.params.username, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });


module.exports = router;