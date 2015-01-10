(function () {

    'use strict';
    /**
     * @ngdoc overview
     * @name githubListApp
     * @description
     * # githubListApp
     * Main module for test application
     */

    angular
        .module('githubListApp', ['ui.router'])
        .config(require('./config/routes'));

    require('./home');
})();