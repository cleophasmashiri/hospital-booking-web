(function() {
  'use strict';
  angular
    .module('hospitalUi.booking')
    .controller('ConsultController', ConsultController);
  /** @ngInject */
  function ConsultController(BookingService, $log, AuthService, toastr, $state, $stateParams, TaskService, $uibModal) {
    var vm = this;
    vm.currentUser = AuthService.getCurrentUser();
    console.log(vm.currentUser);
    function initialise() {
      if(!AuthService.isAuthorised(['doctors', 'nurses', 'pharmacists'])) {
        toastr.warning('You not authorised to view this page');
        $state.go('auth.login');
      } else {
        listBookingDetails();
      }
    }
    initialise();
    function listBookingDetails() {
      BookingService.getBookingDetails($stateParams.bookingId)
        .then(function (booking) {
          vm.booking = booking;
        })
        .catch(function (err) {
          $log.error(err);
        });
    }
    vm.claimTask = function (task) {
      TaskService.claimTask({taskId:task.taskId, userId: vm.currentUser.email})
        .then(function () {
          listBookingDetails();
        })
        .catch(function (err) {
          $log.error(err);
        });
    };
    vm.completeTask = function (task) {
      task.bookingId = vm.booking.bookingId;
      task.consultantRole = vm.currentUser.roles[0];
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'app/booking/views/completeTask.html',
        controller: 'CompleteTaskController',
        controllerAs:'vm',
        size: 'lg',
        resolve: {
          taskRequest: task
        }
      });
      modalInstance.result.then(function (res) {
      }, function () {
        listBookingDetails();
      });
    };
  }
})();
