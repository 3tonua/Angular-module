app.controller('allController', function ($scope, API) {
    $scope.gits = [];

    $scope.counter = 0;
    $scope.counterUrl = 'https://api.github.com/users';
    API.getAllUsers($scope.counterUrl).then(function (gits) {
        $scope.gits = gits;
    });
    console.log($scope.counter);


    // Счетчик для страниц
    $scope.countplus = function () {
        $scope.counter = $scope.counter + 30;
        $scope.counterUrl = 'https://api.github.com/users?since=' + $scope.counter;
        API.getAllUsers($scope.counterUrl).then(function (gits) {
            $scope.gits = gits;
        });
        console.log($scope.counterUrl);

    };
    $scope.countminus = function () {
        $scope.counter = $scope.counter - 30;
        $scope.counterUrl = 'https://api.github.com/users?since=' + $scope.counter;
        API.getAllUsers($scope.counterUrl).then(function (gits) {
            $scope.gits = gits;
        });
        console.log($scope.counterUrl);
    };
});