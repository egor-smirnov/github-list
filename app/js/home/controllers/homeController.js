'use strict';

/**
 * @namespace Home.Controllers
 * @ngdoc function
 * @name githubListAppHomeController
 * @description
 * # HomeController
 * Controller that is responsible for information on home page
 */

(function () {

    function controllerFn(githubUser) {

        var vm = this;

        vm.username = '';
        vm.status = '';
        vm.repositories = [];

        vm.getGithubUser = getGithubUser;
        vm.isLoading = isLoading;
        vm.isError = isError;

        function getGithubUser() {

            vm.repositories = [];
            vm.status = 'loading';

            githubUser
                .get(vm.username)
                .success(function (repositories) {

                    if (angular.isArray(repositories)) {

                        if (repositories.length > 0) {

                            vm.status = '';
                            vm.repositories = repositories;
                        }
                        else {

                            throwError('No Repositories were found for requested user');
                        }
                    }
                    else {

                        throwError('Invalid Structure of response');
                    }
                })
                .error(function (error, status) {

                    if (status === 0) {

                        throwError('Server didnt respond');

                    } else {

                        throwError(error.message || 'Some undefined error occurred');
                    }
                });
        }

        function isLoading() {

            return vm.status == 'loading';
        }

        function isError() {

            return vm.status == 'error';
        }

        function throwError(error) {

            vm.status = 'error';
            vm.errorInfo = error;
        }
    }

    controllerFn.$inject = ['githubUser'];

    module.exports = controllerFn;
})();