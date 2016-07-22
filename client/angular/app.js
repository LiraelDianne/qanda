console.log('angular app')
var app = angular.module('app', ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../partials/home.html',
            controller: 'homeController'
        })
        .when('/index', {
            templateUrl: '../partials/index.html',
            controller: 'indexController'
        })
        .when('/new_question', {
            templateUrl: '../partials/new_question.html',
            controller: 'new_questionController'
        })
        .when('/question/:id', {
            templateUrl: '../partials/question.html',
            controller: 'questionController'
        })
        .when('/question/:id/new_answer', {
            templateUrl: '../partials/new_answer.html',
            controller: 'new_answerController'
        })
        .otherwise({
            redirectTo: '/index'
        })
})
