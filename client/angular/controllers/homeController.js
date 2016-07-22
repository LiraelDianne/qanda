app.controller('homeController', ['$scope', '$location', 'questionsFactory', 'usersFactory', function($scope, $location, questionsFactory, usersFactory) {
    //logged in check
    usersFactory.getuser(function(user) {
        console.log(user)
        if (user.name) {
            $scope.user = user
        } else {
            $location.url('/index')
        }
    })
    //display questions
    var index = function() {
        questionsFactory.index(function(returnedData) {
            $scope.questions = returnedData.data
        })
    }
    index();
    $scope.logout = function() {
        usersFactory.logout()
        $location.url('/index')
    }
}])
