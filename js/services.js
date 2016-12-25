angular.module('services', [])

.service('API', function ($http, $q) {
    return{
        getGitUsers: function () {
            var d = $q.defer();
            $http({
                method: 'GET',
                url: 'https://api.github.com/users'
            }).then(function (data) {

                var users = data;

                console.log(users);
                console.log(data);

                d.resolve(users);
            });
            return d.promise
        }
    }
});