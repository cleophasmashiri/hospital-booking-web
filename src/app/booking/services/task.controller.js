(function() {
  'use strict';
  angular
    .module('hospitalUi.booking')
      .controller('TaskController', TaskController);
  /** @ngInject */
  function TaskController(TaskService, $stateParams, AuthService, toastr) {
    var vm = this;
    listTasks();
    function listTasks() {
      TaskService.listByUserId(AuthService.getCurrentUserId, $stateParams.userType)
        .then(function (tasks) {
          vm.tasks = tasks;
        })
        .catch(function (err) {
          toastr.error(err, 'Error');
        });
    }
    vm.claim = function (task) {
      processTask(task, 'claim');
    };
    vm.complete = function (task) {
      processTask(task, 'complete');
    };
    function processTask(task, processName) {
      TaskService.processTask(task, processName)
        .then(function (tasks) {
          //vm.tasks = tasks;
        })
        .catch(function (err) {
          toastr.error(err, 'Error');
        });
    }
  }
})();
