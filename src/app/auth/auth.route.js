(function() {
  'use strict';

  angular
    .module('hospitalUi.auth')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('layout', {
        url: '/',
        templateUrl: 'app/auth/layout.html',
        controller: 'AuthLayoutController',
        controllerAs: 'vm',
        abstract: true
      })
      .state('layout.login', {
      url: 'login',
      views: {
        'mainView': {
          templateUrl: 'app/auth/login.html',
          controller: 'LoginController',
          controllerAs: 'vm'
        }
      }
    });
  }

})();
