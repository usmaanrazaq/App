var db = require('../Utilities/db')


module.exports.findUser = function(username, password, cb) {
  var collection = db.get().collection('users')
  collection.find( { username: username, password: password } ).toArray(function(err, user) {

    cb(err, user)
  })
}






// FindUserByUsername = function(username, callback){
// Users.find({username: username }, callback);
// }
// module.exports.FindUserByUsername = FindUserByUsername;

// UpdateUserPassword = function(username, password, callback){
// Users.findOneAndUpdate({ username: username }, { password: password }, callback);
// }

// module.exports.UpdateUserPassword = UpdateUserPassword;

// DeleteUser = function(username, callback){
// Users.findOneAndRemove({ username: username }, callback);
// }
// module.exports.DeleteUser = DeleteUser;