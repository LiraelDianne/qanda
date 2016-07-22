console.log('answer model')
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var answerSchema = new mongoose.Schema({
    content: {type: String, required: true, minlength: 2, maxlength: 500},
    details: {type: String, minlength: 2, maxlength: 500},
    _author: {type: Schema.Types.ObjectId, ref: 'users'},
    _question: {type: Schema.Types.ObjectId, ref: 'questions'},
    likes: {type: Number}

}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

/*
answerSchema.methods.methodname = function() {

}

answerSchema.pre('save', function(done) {

    done()
})
*/

mongoose.model('answers', answerSchema)
