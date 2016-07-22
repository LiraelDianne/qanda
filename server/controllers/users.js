console.log('users controller')

var mongoose = require('mongoose')
var User = mongoose.model('users')

function UserController() {
    this.create = function(req, res) {
        var user = new User(req.body)
        user.save(function(err) {
            if(err) {
                res.json({status: false, error: err.errors})
            } else {
                res.json({status: true, data: user})
            }
        })
    }
    this.show = function(req, res) {
        var name = req.params.name
        User.findOne({name: name}, function(err, user) {
            if(err) {
                res.json({error: err})
            } else {
                res.json({user: user})
            }
        })
    }
    this.delete = function(req, res) {
        User.remove({name: req.params.name}, function(err) {
            if(err) {
                res.json({status: false, error: err})
            } else {
                res.json({status: true})
            }
        })
    }
}
module.exports = new UserController()
