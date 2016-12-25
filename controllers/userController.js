app.controller('userController', function ($scope, $routeParams, API) {
    API.getOneUser($routeParams.username).then(function (data) {
        $scope.oneUser = data;
        console.log(data);
        console.log(data.created_at);

        var username = $routeParams.username;
        console.log(username);

        //Дата создания аккаунта
        $scope.CreatedAt = data.created_at;
        var event = moment($scope.CreatedAt);
        console.log(event);
        $scope.userDate = event.format('DD/MM/YYYY');
        console.log($scope.userDate);
    });
});