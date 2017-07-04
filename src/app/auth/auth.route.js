(function() {
  'use strict';

  angular
    .module('hospitalUi.auth')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('auth', {
        url: '/',
        templateUrl: 'app/auth/layout.html',
        controller: 'AuthLayoutController',
        controllerAs: 'vm',
        abstract: true
      })
      .state('auth.login', {
      url: 'login',
      views: {
        'mainView': {
          templateUrl: 'app/auth/login.html',
          controller: 'LoginController',
          controllerAs: 'vm'
        }
      }
    }).state('auth.register', {
      url: 'register/:roleId',
      views: {
        'mainView': {
          templateUrl: 'app/auth/register.html',
          controller: 'RegisterController',
          controllerAs: 'vm'
        }
      }
    });
  }

})();
