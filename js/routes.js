app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'allController',
        templateUrl: 'templates/all-users.html'
    }).when('/open-user/:username', {
        controller: 'userController',
        templateUrl: 'templates/open-user.html'
    })
});