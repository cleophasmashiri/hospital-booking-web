/**
 * Created by cleophas on 2017/06/21.
 */
(function () {
  angular.module('hospitalUi.booking').factory('TaskService', TaskService);
  function TaskService($http, $q, $log, mainConfig) {
    return {listByUserId: listByUserId, claimTask: claimTask, completeTask: completeTask};
    function listByUserId(userId, userType) {
      if (!userId || !userType) {
        return $q.reject('User Id and User Type must be provided');
      }
      return $http.get(mainConfig.baseUrl + 'booking/tasks/' + userType + '/' + userId)
        .then(function (bookingsResponse) {
          return $q.resolve(bookingsResponse.data);
        })
        .catch(function (err) {
          $log.error(err);
          return $q.reject(err);
        });
    }
    function claimTask(task) {
      return processTask(task, 'claim');
    }
    function completeTask(task) {
      return processTask(task, 'complete');
    }
    function processTask(task, processName) {
      console.log(task);
      if (!task || !processName) {
        return $q.reject('Task and Process Name must be provided');
      }
      return $http.post(mainConfig.baseUrl + 'booking/' + processName, task)
        .then(function (taskResponse) {
          return $q.resolve(taskResponse.data);
        })
        .catch(function (err) {
          $log.error(err);
          return $q.reject(err);
        });
    }
  }
})();
