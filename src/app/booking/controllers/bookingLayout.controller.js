(function() {
  'use strict';
  angular
    .module('hospitalUi.booking')
    .controller('BookingLayoutController', BookingLayoutController);
  /** @ngInject */
  function BookingLayoutController(AuthService, $state) {
    var vm = this;
    vm.currentUser = AuthService.getCurrentUser();
    vm.logout = function () {
      AuthService.logOut();
      $state.go('auth.login');
    };
  }
})();
