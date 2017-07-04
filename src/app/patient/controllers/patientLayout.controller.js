(function() {
  'use strict';
  angular
    .module('hospitalUi.patient')
    .controller('PatientLayoutController', PatientLayoutController);
  /** @ngInject */
  function PatientLayoutController(AuthService, $state) {
    var vm = this;
    vm.currentUser = AuthService.getCurrentUser();
    vm.logout = function () {
      AuthService.logOut();
      $state.go('auth.login');
    };
  }
})();
