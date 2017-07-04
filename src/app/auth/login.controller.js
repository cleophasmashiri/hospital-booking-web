(function () {
  'use strict';
  angular
    .module('hospitalUi.auth')
    .controller('LoginController', LoginController);
  /** @ngInject */
  function LoginController(toastr, $state, AuthService) {
    var vm = this;
    vm.login = function () {
      AuthService.login(vm.credentials)
        .then(function (roles) {
          if (roles.indexOf('patients') > -1) {
            $state.go('patient.booking');
          } else if (roles.indexOf('doctors') > -1 || roles.indexOf('nurses') > -1 || roles.indexOf('pharmacists') > -1) {
            $state.go('booking.consult');
          } else {
            toastr.info('You are not authorised to use this site, ');
          }
        })
        .catch(function (err) {
          if(err.status === 401) {
            toastr.warning('Login Error, your user name or password incorrect', 'Warning');
          } else {
            toastr.warning('Login Error, You are not authorised to use this site', 'Warning');
          }
        });
    }
  }
})();
