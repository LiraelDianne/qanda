console.log('restful routes')
var users = require('../controllers/users')
var questions = require('../controllers/questions')
var answers = require('../controllers/answers')

module.exports = function(app){
    //users
    app.post('/users', users.create);
    app.get('/users/:name', users.show);
    app.delete('/users/:name', users.delete);

    // questions
    app.get('/questions', questions.index);
    app.post('/questions', questions.create);
    app.get('/questions/:id', questions.show);
    app.put('/questions/:id', questions.update);
    app.delete('/questions/:id', questions.delete);

    //answers
    app.post('/answers', answers.create);
    app.put('/answers/:id', answers.update);
    app.delete('/answers/:id', answers.delete);
}
