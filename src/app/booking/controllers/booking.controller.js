(function() {
  'use strict';
  angular
    .module('hospitalUi.booking')
    .controller('BookingController', BookingController);
  /** @ngInject */
  function BookingController($state, AuthService, toastr) {
    var vm = this;
    vm.currentUser = AuthService.getCurrentUser();
    function initialise() {
      if(!vm.currentUser) {
        toastr.warning('You not authorised to view this page');
        $state.go('auth.login');
      } else {
        list();
      }
    }
    initialise();
     function list() {
      // vm.bookings = BookingService.listByUserId(AuthService.getCurrentUserId())
      //   .then(function (bookings) {
      //     vm.bookings = bookings;
      //   })
      //   .catch(function (err) {
      //     $log.error(err);
      //   });
    }
  }
})();
