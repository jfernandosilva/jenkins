//= wrapped
//= require /angular/angular
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("jenkins.table", []).config(configRoute);

function configRoute($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('table', {
            url: "/table",
            templateUrl: "/jenkins/table/table.html",
            controller: "MainController"
        });
}
