(function() {
  'use strict';
  angular
    .module('hospitalUi.patient')
    .controller('NewBookingController', NewBookingController);
  /** @ngInject */
  function NewBookingController($state, AuthService, toastr, PatientService) {
    var vm = this;
    vm.makeBooking = function(isValid) {
      vm.submitted = true;
      if(!isValid){
        toastr.warning('Invalid data');
        return;
      }
      PatientService.makeBooking(vm.booking)
        .then(function () {
          $state.go("patient.booking");
          vm.submitted = false;
        })
        .catch(function (err) {
          toastr.warning(err);
        });
    };
    vm.submitted = false;
    vm.currentUser = AuthService.getCurrentUser();
    function initialise() {
      if(!vm.currentUser) {
        toastr.warning('You not authorised to view this page');
        $state.go('auth.login');
      } else {
        vm.booking = {email:vm.currentUser.email};
      }
    }
    initialise();

    vm.openRequiredDate = function () {
      vm.requiredDateOpened = true;
    };
  }
})();
