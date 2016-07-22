console.log('questions Factory');
app.factory('questionsFactory', ['$http', function($http) {
    // constructor for our factory
    var questions = [];
    var question = {};

    function questionsFactory(){
        var _this = this;
        this.index = function(callback){
            //update/set the questions variable
            $http.get('/questions').then(function(returned_data){
                console.log(returned_data.data);
                questions = returned_data.data;
                if (typeof(callback) == 'function') {
                    callback(questions);
                }
            });
        };
        this.create = function(newquestion,callback){
            $http.post('/questions', newquestion).then(function(returned_data){
                if (typeof(callback) == 'function'){
                    callback(returned_data);
                }
            });
        };
        this.show = function(id, callback){
            $http.get('/questions/'+id).then(function(returned_data) {
                question = returned_data.data
                if (typeof(callback) === 'function') {
                    callback(returned_data.data)
                }
            })
        };
        this.update = function(questionId, answerId, callback){
            $http.put('/questions/'+questionId, {answerId: answerId}).then(function(returned_data){
                console.log('question updated with answer', returned_data.data)
                if (typeof(callback) == 'function') {
                    callback(returned_data.data)
                }
          });
        };
        this.delete = function(id, callback){
            $http.delete('/questions/'+id).then(function(returned_data) {
                console.log(returned_data.data)
                if (typeof(callback) == 'function') {
                  callback(returned_data)
                }
            })
            question = {}
        };
        // methods for setting and getting the information stored in the factory
        // no db calls
        this.getquestions = function(callback){
          callback(questions);
        };
        this.getquestion = function(callback){
          callback(question);
        };
    }
    return new questionsFactory();
}]);
