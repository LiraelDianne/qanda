app.controller('new_answerController', ['$scope', '$routeParams', '$location', 'answersFactory', 'questionsFactory', 'usersFactory',
    function($scope, $routeParams, $location, answersFactory, questionsFactory, usersFactory) {
    //logged in check
    usersFactory.getuser(function(user) {
        if(user.name) {
            $scope.user = user
        } else {
            $location.url('/index')
        }
    })
    //retrieve question
    var showQuestion = function() {
        questionsFactory.show($routeParams.id, function(returnedData) {
            $scope.question = returnedData.data
        })
    }
    showQuestion()
    //clear answer on cancel
    $scope.clear = function() {
        $scope.newanswer = {}
    }
    //submit answer
    $scope.create = function() {
        // create a new answer
        $scope.newanswer._author = $scope.user
        answersFactory.create($scope.newanswer, function(returnedData) {
            $scope.answer = returnedData.data.data
            // wipe the temporary object once added
            $scope.newanswer = {}
            //add answer to question object
            console.log('answer added')
            console.log($scope.question)
            console.log($scope.answer)
            questionsFactory.update($scope.question._id, $scope.answer, function(returnedData) {
                //redirect to home page
                $location.url('/')
            })
        })
    }
    $scope.logout = function() {
        usersFactory.logout()
        $location.url('/index')
    }
}])
