(function() {
  'use strict';
  angular
    .module('hospitalUi.booking')
    .controller('BookingController', BookingController);
  /** @ngInject */
  function BookingController(BookingService, $log, AuthService) {
    var vm = this;
    vm.list = function () {
      vm.bookings = BookingService.listByUserId(AuthService.getCurrentUserId())
        .then(function (bookings) {
          vm.bookings = bookings;
        })
        .catch(function (err) {
          $log.error(err);
        });
    };
    vm.list();
  }
})();
