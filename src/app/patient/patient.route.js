(function() {
  'use strict';

  angular
    .module('hospitalUi.patient')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('patient', {
        url: '/patient/',
        templateUrl: 'app/patient/views/layout.html',
        controller: 'PatientLayoutController',
        controllerAs: 'vm',
        abstract: true
      })
      .state('patient.booking', {
        url: 'booking',
        views: {
          'mainView': {
            templateUrl: 'app/patient/views/bookings.html',
            controller: 'PatientController',
            controllerAs: 'vm'
          }
        }
      }).state('patient.newBooking', {
      url: 'newBooking',
      views: {
        'mainView': {
          templateUrl: 'app/patient/views/newBooking.html',
          controller: 'NewBookingController',
          controllerAs: 'vm'
        }
      }
    });
  }

})();
