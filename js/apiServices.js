app.service('API', function ($http, $q) {
    return {
        getAllUsers: function (params) {
            var d = $q.defer();
            $http({
                method: 'GET',
                url: 'https://api.github.com/users',
                params:{
                    since: 0
                }
            }).then(function (data) {
                var igits = data.data;

                d.resolve(igits);
                console.log(igits);
            });
            return d.promise
        },
        getOneUser: function (username) {
            var url = 'https://api.github.com/users/' + username;
            var u = $q.defer();
            $http({
                method: 'GET',
                url: url
            }).then(function (data) {
                console.log(data);
                var oneUser = data.data;
                console.log(oneUser);

                u.resolve(oneUser)
            });
            return u.promise
        }
    }
});