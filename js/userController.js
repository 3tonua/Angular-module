app.controller('userController', function ($scope, $routeParams, API) {
    API.getOneUser($routeParams.username).then(function (data) {
        $scope.oneUser = data;
        // console.log(data);
        // console.log(data.created_at);
        // console.log(data.login);
        //
        var username = $routeParams.username;
        console.log(username);

        // console.log($scope.username);
        // $scope.userUrl = 'https://api.github.com/users/' + username;
        // console.log($scope.userUrl);
    });
});