'use strict';

/**
 * @namespace Home.Services
 * @ngdoc service
 * @name GithubListAppGithubUser
 * @description
 * # GithubUser
 * AngularJS factory responsible for representation of github username
 */

(function () {

    function factoryFn($http) {

        return {
            get: get
        };

        function get(username) {
            return $http
                .get("https://api.github.com/users/" + username + '/repos')
                .success(function (data) {

                    return data.data;
                });
        }
    }

    factoryFn.$inject = ['$http'];

    module.exports = factoryFn;
})();