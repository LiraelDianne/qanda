console.log('users Factory');
app.factory('usersFactory', ['$http', function($http) {
    // constructor for our factory
    var users = [];
    var user = {};

    function usersFactory(){
        var _this = this;
        this.index = function(callback){
            //set the users variable
            $http.get('/users').then(function(returned_data){
                console.log(returned_data.data);
                users = returned_data.data;
                if (typeof(callback) == 'function') {
                    callback(users);
                }
            });
        };
        this.create = function(newuser,callback){
            $http.post('/users', newuser).then(function(returned_data){
                user = returned_data.data.data
                if (typeof(callback) == 'function'){
                    callback(returned_data);
                }
            });
        };
        this.login = function(user,callback){
            $http.get('/users/'+user.name).then(function(returned_data) {
                if(returned_data.data.status) {
                    console.log('logging in', returned_data.data)
                    user = returned_data.data.user
                }
                if (typeof(callback) == 'function'){
                    callback(returned_data);
                }
            })
        };
        this.logout = function() {
            user = {}
        }
        // get the user information stored in the factory with no db call
        this.getuser = function(callback){
            callback(user);
        };
    }
    return new usersFactory();
}]);
