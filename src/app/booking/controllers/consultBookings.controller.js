(function() {
  'use strict';
  angular
    .module('hospitalUi.booking')
    .controller('ConsultBookingsController', ConsultBookingsController);
  /** @ngInject */
  function ConsultBookingsController(BookingService, $log, AuthService, toastr, $state) {
    var vm = this;
    function initialise() {
      if(!AuthService.isAuthorised(['doctors', 'nurses', 'pharmacists'])) {
        toastr.warning('You not authorised to view this page');
        $state.go('auth.login');
      } else {
        list();
      }
    }
    initialise();
    function list() {
      vm.bookings = BookingService.listAll()
        .then(function (bookings) {
          vm.bookings = bookings;
        })
        .catch(function (err) {
          $log.error(err);
        });
    }
  }
})();
