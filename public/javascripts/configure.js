var app = angular.module('app', [
    'ngResource',
    'ui.router',
    'ng.ueditor',
    'ui.materialize',
    'ue.config',
    'tyq.api'
]);
app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true
    });
}]);