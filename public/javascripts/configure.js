var app = angular.module('app', [
    'ngResource',
    'ui.router',
    'ng.ueditor',
    'ui.materialize',
    'ue.config',
    'api.tyq'
]);
app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true
    });
}]);