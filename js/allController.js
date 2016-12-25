app.controller('allController', function ($scope, API) {
    $scope.gits = [];

    API.getAllUsers().then(function (gits) {
        $scope.gits = gits;
        console.log(gits[1]);

        // Счетчик страниц
        $scope.countplus = function () {
            $scope.counter = $scope.counter + 30
        };
        $scope.countminus = function () {
            $scope.counter = $scope.counter - 30
        };
        $scope.counter = 0;
        console.log($scope.counter);
    });
});