'use strict';

module.exports = (function () {

    angular
        .module('githubListApp')
        .controller('githubListApp.HomeController', require('./controllers/homeController'))
        .factory('githubUser', require('./models/githubUser'));
})();