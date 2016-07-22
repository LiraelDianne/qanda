console.log('question model')
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var questionSchema = new mongoose.Schema({
    content: {type: String, required: true, minlength: 10, maxlength: 250},
    description: {type: String, minlength: 3, maxlength: 1000},
    _author: {type: Schema.Types.ObjectId, ref: 'users'},
    _answers: [{type: Schema.Types.ObjectId, ref: 'answers'}]
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

/*
questionSchema.methods.methodname = function() {

}

questionSchema.pre('save', function(done) {

    done()
})
*/

mongoose.model('questions', questionSchema)
