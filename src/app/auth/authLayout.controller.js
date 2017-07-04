(function() {
  'use strict';

  angular
    .module('hospitalUi.auth')
    .controller('AuthLayoutController', AuthLayoutController);

  /** @ngInject */
  function AuthLayoutController(AuthService, $state) {
    var vm = this;
    vm.logout = function () {
      AuthService.logOut();
      $state.go('auth.login');
    };
  }
})();
