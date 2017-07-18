/**
 * Created by cleophas on 2017/06/21.
 */
(function () {
  angular.module('hospitalUi.patient').factory('PatientService', PatientService);

  function PatientService($http, $q, mainConfig) {
    return {listByUserId: listByUserId, makeBooking: makeBooking};
    function makeBooking(booking) {
      return $http.post(mainConfig.baseUrl + 'new', booking)
        .then(function (res) {
          return $q.resolve(res.data);
        })
        .catch(function (err) {
          return $q.reject(err);
        });
    }
    function listByUserId(userId) {
      if (!userId) {
        return $q.reject('User Id must be provided');
      }
      return $http.get(mainConfig.baseUrl + 'mybookings/' + userId)
        .then(function (bookingsResponse) {
          return $q.resolve(bookingsResponse.data);
        })
        .catch(function (err) {
          return $q.reject(err);
        });
    }
  }
})();
