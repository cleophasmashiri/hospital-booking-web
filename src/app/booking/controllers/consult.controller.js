(function() {
  'use strict';
  angular
    .module('hospitalUi.booking')
    .controller('ConsultController', ConsultController);
  /** @ngInject */
  function ConsultController(BookingService, $log, AuthService,toastr, $state) {
    var vm = this;
    function initialise() {
      if(!AuthService.isAuthorised(['doctors', 'nurses', 'pharmacists'])) {
        toastr.warning('You not authorised to view this page');
        $state.go('auth.login');
      } else {
        list();
      }
    }
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
