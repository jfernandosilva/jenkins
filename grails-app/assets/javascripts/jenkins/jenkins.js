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
            template: "jenkins APP"
        });
}
/*
$stateProvider
    .state('index', {
        url: "/",
        templateUrl: "/jenkins/index/index.html"
    });
*/
