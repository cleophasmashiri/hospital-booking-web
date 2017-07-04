(function () {
  'use strict';
  angular
    .module('hospitalUi.auth')
    .controller('RegisterController', RegisterController);
  /** @ngInject */
  function RegisterController(toastr, $state, AuthService, $stateParams) {
    var vm = this;
    vm.register = function () {
      if(!vm.roleId) {
        toastr.warning('Invalid url', 'Warning');
        return;
      }
      vm.credentials.roles = [vm.roleId];
      AuthService.register(vm.credentials)
        .then(function () {
          $state.go('auth.login');
        })
        .catch(function () {
          toastr.warning('Login Error, You are not authorised to use this site', 'Warning');
        });
    }
  }
})();
