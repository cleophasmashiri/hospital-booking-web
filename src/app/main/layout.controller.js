(function() {
  'use strict';

  angular
    .module('hospitalUi')
    .controller('LayoutController', LayoutController);
  /** @ngInject */
  function LayoutController(AuthService, $state) {
    var vm = this;
    vm.currentUser = AuthService.getCurrentUser();
    vm.logout = function () {
      AuthService.logOut();
      $state.go('auth.login');
    };
  }
})();
