(function() {
  'use strict';
  angular
    .module('hospitalUi.booking')
    .controller('ConsultController', ConsultController);
  /** @ngInject */
  function ConsultController(BookingService, $log, AuthService) {
    var vm = this;
    vm.list = function () {
      vm.bookings = BookingService.listAll(AuthService.getCurrentUserId())
        .then(function (bookings) {
          vm.bookings = bookings;
        })
        .catch(function (err) {
          $log.error(err);
        });
    };
  }
})();
