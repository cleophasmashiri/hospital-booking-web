(function() {
  'use strict';

  angular
    .module('hospitalUi')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/layout.html',
        controller: 'LayoutController',
        controllerAs: 'vm',
        abstract: true
      })
      .state('home.main', {
        url: '',
        views: {
          'mainView': {
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'vm'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
