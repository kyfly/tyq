var app = angular.module('app', [
    'ngResource',
    'ui.router',
    'ui.materialize',
    'ue.config'
]);
app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true
    });
}])