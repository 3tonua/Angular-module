app.controller('userController', function ($scope, API) {
    API.getOneUser().then(function (data) {
        $scope.oneUser = data;
        console.log(data);
        console.log(data.created_at);
        console.log(data.login);
        var username = data.login;
        console.log(username);
        $scope.username = data.login;
        $scope.userUrl = 'https://api.github.com/users/' + username;
        console.log($scope.userUrl);
    });
});