/**
 * Created by cleophas on 2017/06/21.
 */
(function () {
  angular.module('hospitalUi.booking').factory('TaskService', TaskService);
  function TaskService($http, $q, $log, bookingConfig) {
    return {listByUserId: listByUserId, processTask: processTask};
    function listByUserId(userId, userType) {
      if (!userId || !userType) {
        return $q.reject('User Id and User Type must be provided');
      }
      return $http.get(bookingConfig.baseUrl + 'tasks/' + userType + '/' + userId)
        .then(function (bookingsResponse) {
          return $q.resolve(bookingsResponse.data);
        })
        .catch(function (err) {
          $log.error(err);
          return $q.reject(err);
        });
    }
    function processTask(task, processName) {
      if (!task || !processName) {
        return $q.reject('Task and Process Name must be provided');
      }
      return $http.post(bookingConfig.baseUrl + 'tasks/' + processName, task)
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
