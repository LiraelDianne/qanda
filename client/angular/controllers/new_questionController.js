app.controller('new_questionController', ['$scope', '$location', 'questionsFactory', 'usersFactory',
    function($scope, $location, questionsFactory, usersFactory) {
    //logged in check
    usersFactory.getuser(function(user) {
        if(user.name) {
            $scope.user = user
        } else {
            $location.url('/index')
        }
    })
    //make a new question
    $scope.create = function() {
        // create a new question
        questionsFactory.create($scope.newquestion, function(returnedData) {
            $scope.question = returnedData.data
            // wipe the temporary object once added
            $scope.newquestion = {}
            $location.url('/question/'+$scope.question._id)
        })
    }
    //clear question on cancel
    $scope.clear = function() {
        $scope.newquestion = {}
    }
    $scope.logout = function() {
        usersFactory.logout()
        $location.url('/index')
    }
}])
