console.log('questions controller')

var mongoose = require('mongoose')
var Question = mongoose.model('questions')

function QuestionController() {
    this.index = function(req, res) {
        Question.find({}, function(err, questions) {
            if(err) {
                res.json({status: false, error: err})
            } else {
            //return a list of questions
                res.json({status: true, data: questions})
            }
        })
    }
    this.create = function(req, res) {
        var question = new Question(req.body)
        question.save(function(err) {
            if(err) {
                res.json({status: false, error: err.errors})
            } else {
                res.json({status: true, data: question})
            }
        })
    }
    this.show = function(req, res) {
        Question.findOne({_id: req.params.id})
        .populate({path: '_answers', populate: {path: '_author'}})
        .exec(function(err, question) {
            if(err) {
                res.json({status: false, error: err.errors})
            } else {
                res.json({status: true, data: question})
            }
        })
    }
    this.update = function(req, res) {
        console.log(req.params.id)
        console.log(req.body.answerId)
        Question.update({_id: req.params.id}, {$addToSet: {_answers: req.body.answerId}}, function(err) {
            if(err) {
                res.json({status: false, error: err.errors})
            } else {
                res.json({status: true})
            }
        })
    }
    this.delete = function(req, res) {
        Question.remove({_id: req.params.id}, function(err) {
            if(err) {
                res.json({status: false, error: err})
            } else {
                res.json({status: true})
            }
        })
    }
}
module.exports = new QuestionController()
