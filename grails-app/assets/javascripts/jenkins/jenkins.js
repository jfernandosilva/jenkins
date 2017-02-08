//= wrapped
//= require /angular/angular
//= require /angular/angular-ui-router.js
//= require /jenkins/table/jenkins.table.js

angular.module("jenkins", [
    'ui.router',
    'jenkins.table'
]).config(configRoute);

function configRoute($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('index', {
            url: "/",
            template: "<h1 class='text-danger'><b>jenkins APP</b></h1>"
        });
}
/*
$stateProvider
    .state('index', {
        url: "/",
        templateUrl: "/jenkins/index/index.html"
    });
*/
