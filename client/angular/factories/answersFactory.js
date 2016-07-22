console.log('answers Factory');
app.factory('answersFactory', ['$http', function($http) {
    // constructor for our factory
    var answers = [];
    var answer = {};

    function answersFactory(){
        var _this = this;
        this.index = function(callback){
            //update/set the answers variable
            $http.get('/answers').then(function(returned_data){
                console.log(returned_data.data);
                answers = returned_data.data.data;
                if (typeof(callback) == 'function') {
                    callback(answers);
                }
            });
        };
        this.create = function(newanswer,callback){
            $http.post('/answers', newanswer).then(function(returned_data){
                if (typeof(callback) == 'function'){
                    callback(returned_data);
                }
            });
        };
        this.show = function(id, callback){
            $http.get('/answer/'+id).then(function(returned_data) {
                answer = returned_data.data
                if (typeof(callback) === 'function') {
                    callback(returned_data)
                }
            })
        };
        this.update = function(answerId, answer, callback){
            $http.put('/answers/'+answerId, answer).then(function(returned_data){
                console.log(returned_data.data)
                if (typeof(callback) == 'function') {
                    callback(returned_data.data)
                }
          });
        };
        this.delete = function(id, callback){
            $http.delete('/answers/'+id).then(function(returned_data) {
                console.log(returned_data.data)
                if (typeof(callback) == 'function') {
                  callback(returned_data)
                }
            })
            answer = {}
        };
        // methods for setting and getting the information stored in the factory
        // no db calls
        this.getanswers = function(callback){
          callback(answers);
        };
        this.getanswer = function(callback){
          callback(answer);
        };
    }
    return new answersFactory();
}]);
