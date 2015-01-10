'use strict';

(function () {

    module.exports = ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        /**
         * @namespace Config.Routes
         * @ngdoc overview
         * @name githubListAppRoutes
         * @description
         * # githubListApp Routes
         * Defines routes used for application
         */

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'app/partials/home.html',
            controller: 'githubListApp.HomeController',
            controllerAs: 'vm'
        });
    }];
})();