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
        getOneUser: function (us) {

            var url = 'https://api.github.com/users' + username;
            var u = $q.defer();
            $http({
                method: 'GET',
                url: url
            }).then(function () {
                var oneUser = data.data.login;
                console.log(oneUser);

                var username = us.data.login;
                console.log(username);

                u.resolve(oneUser)
            });
            return u.promise
        }
    }
});