console.log('answers controller')

var mongoose = require('mongoose')
var Answer = mongoose.model('answers')

function AnswerController() {
    this.create = function(req, res) {
        var answer = new Answer(req.body)
        answer.save(function(err) {
            if(err) {
                res.json({status: false, error: err.errors})
            } else {
                res.json({status: true, data: answer})
            }
        })
    }
    this.update = function(req, res) {
        Answer.update({_id: req.params.id}, req.body, function(err) {
            if(err) {
                res.json({status: false, error: err.errors})
            } else {
                res.json({status: true})
            }
        })
    }
    this.delete = function(req, res) {
        Answer.remove({_id: req.params.id}, function(err) {
            if(err) {
                res.json({status: false, error: err})
            } else {
                res.json({status: true})
            }
        })
    }
}
module.exports = new AnswerController()
