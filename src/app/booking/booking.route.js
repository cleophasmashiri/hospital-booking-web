(function() {
  'use strict';

  angular
    .module('hospitalUi.booking')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('booking', {
        url: '/booking/',
        templateUrl: 'app/booking/views/layout.html',
        controller: 'BookingLayoutController',
        controllerAs: 'vm',
        abstract: true
      })
      .state('booking.patients', {
        url: 'patient',
        views: {
          'mainView': {
            templateUrl: 'app/booking/views/bookings.html',
            controller: 'BookingController',
            controllerAs: 'vm'
          }
        }
      }).state('booking.consult', {
      url: 'consult',
      views: {
        'mainView': {
          templateUrl: 'app/booking/views/consultBookings.html',
          controller: 'ConsultBookingsController',
          controllerAs: 'vm'
        }
      }
    }).state('booking.consultProcess', {
      url: 'consult/:bookingId',
      views: {
        'mainView': {
          templateUrl: 'app/booking/views/consult.html',
          controller: 'ConsultController',
          controllerAs: 'vm'
        }
      }
    });
  }

})();
