console.log('user model')
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2, maxlength: 250},
    _questions: {type: Schema.Types.ObjectId, ref: 'questions'},
    _answers: [{type: Schema.Types.ObjectId, ref: 'answers'}]
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

/*
userSchema.methods.methodname = function() {

}

userSchema.pre('save', function(done) {

    done()
})
*/

mongoose.model('users', userSchema)
