//= wrapped
//= require /angular/angular
//= require /angular/angular-ui-router.js

angular.module("jenkins", ['ui.router']).config(configRoute);

function configRoute($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}
/*
$stateProvider
    .state('index', {
        url: "/",
        templateUrl: "/jenkins/index/index.html"
    });
*/
