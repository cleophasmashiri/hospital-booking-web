(function () {
  'use strict';
  angular
    .module('hospitalUi.booking')
    .controller('CompleteTaskController', CompleteTaskController);
  /** @ngInject */
  function CompleteTaskController(taskRequest, TaskService, toastr, $uibModalInstance) {
    var vm = this;
    vm.decisions = [{id: 'ReferToDoctor', name: 'Refer to doctor'}, {
      id: 'ReferToPharmacy',
      name: 'Refer to pharmacy'
    }, {id: 'Complete', name: 'Complete'}];

    vm.ok = function () {
      $uibModalInstance.close();
    };
    vm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
    vm.completeTask = function () {
      TaskService.completeTask({
        taskId: taskRequest.taskId,
        bookingId: taskRequest.bookingId,
        consultantRole: taskRequest.consultantRole,
        consultation: {comment: vm.comments, decision: vm.decision}
      })
        .then(function () {
          $uibModalInstance.close();
        })
        .catch(function (err) {
          toastr.error(err, 'Error');
        });
    };
  }
})();
