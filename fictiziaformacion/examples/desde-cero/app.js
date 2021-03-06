/* globals angular */
'use strict';

angular.module('myApp', [
    'ngRoute', 
    'ngAnimate', 
    'modulo.home', 
    'modulo.form', 
    'modulo.chat', 
    'modulo.detail', 
    'modulo.filtros', 
    'modulo.miDirectiva'])
    .constant('oURLs', {
        partials: {
            menu: 'partials/menu.html'
        },
        templates: {
            notFound: '404/404.html',
            login: 'login/login.html'
        },
        paths: {
            login: '/login'
        }
    })
    .config(['$routeProvider', '$locationProvider', 'oURLs', 'oDB', function ($routeProvider, $locationProvider, oURLs) {
        console.log('config de mi app');
        $locationProvider.html5Mode({
            enabled: true/*,
            requireBase: false*/
        });
        $routeProvider
        .otherwise({
            templateUrl: oURLs.templates.notFound
        });
    }])
    .controller('AppCtrl', ['$rootScope', '$scope', 'daysAgoFilter', function ($rootScope, $scope, daysAgoFilter) {
        console.log(daysAgoFilter);
        $scope.hoy = new Date();
        
        $scope.miNombre = 'Alvaro';
        $scope.pepito = {
            nombre: 'Alvaro',
            apellido: 'Isorna'
        };
        
        $rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
            console.log(rejection);
          //if (err === "AUTH_REQUIRED") {
            //$location.path(oURLs.paths.login);
          //}
        });
    }])
    .controller('HeaderController', ['$scope', 'oURLs', function ($scope, oURLs){
        $scope.URL_menu = oURLs.partials.menu;
    }])
    .controller('MenuController', ['$scope', function ($scope) {
        // ...
    }]);