(function () {
  'use strict';
  angular
    .module('hospitalUi.auth')
    .controller('LoginController', LoginController);
  /** @ngInject */
  function LoginController(toastr, $state, AuthService) {
    var vm = this;
    vm.hideLogins = false;
    vm.toggle = function () {
      console.log('toggle ');
      vm.hideLogins = !vm.hideLogins;
    };
    vm.logins = [{user: 'patient1', password: 'password', home:'patients'},
      {user: 'nurse1', password: 'password', home:'nurses'},
      {user: 'doctor1', password: 'password', home:'doctors'},
      {user: 'pharmacist1', password: 'password', home:'pharmacists'}];
    vm.login = function () {
      AuthService.login(vm.credentials)
        .then(function (res) {

         switch(vm.credentials.userName) {
           case 'patient1':
             $state.go('booking.patients');
             break;
           case 'nurse1':
           case 'doctor1':
           case 'pharmacist1':
             console.log(vm.credentials.userName);
             $state.go('booking.consult');
             break;
         }
        })
        .catch(function (err) {
          toastr.info('Login Error, ' + err.message);
        });
    }
  }
})();
