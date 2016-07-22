app.controller('questionController', ['$scope', '$routeParams', '$location', 'questionsFactory', 'answersFactory', 'usersFactory',
    function($scope, $routeParams, $location, questionsFactory, answersFactory, usersFactory) {
    //logged in check
    usersFactory.getuser(function(user) {
        if(user.name) {
            $scope.user = user
        } else {
            $location.url('/index')
        }
    })
    //load question
    var show = function() {
        questionsFactory.show($routeParams.id, function(data) {
            $scope.question = data.data
        })
    }
    show()
    //like an answer
    $scope.like = function(answer) {
        answer.likes += 1
        answersFactory.update(answer._id, answer, function(data) {
            if(data.status) {
                show()
            }
        })
    }
    $scope.logout = function() {
        usersFactory.logout()
        $location.url('/index')
    }
}])
