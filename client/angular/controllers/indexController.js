app.controller('indexController', ['$scope', '$location', 'usersFactory', function($scope, $location, usersFactory) {
    $scope.login = function() {
        //try to log in with this name
        usersFactory.login($scope.newuser, function(returnedData) {
            if(returnedData.data.status) {
                $scope.newuser = {}
                $location.url('/')
            } else {
                //if login fails, make a new user
                usersFactory.create($scope.newuser, function(returnedData) {
                    $scope.user = returnedData.data
                    // wipe the temporary object once added
                    $scope.newuser = {}
                    $location.url('/')
                })
            }
        })
    }
}])
