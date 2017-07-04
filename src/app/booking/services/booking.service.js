/**
 * Created by cleophas on 2017/06/21.
 */
(function () {
  angular.module('hospitalUi.booking').factory('BookingService', BookingService);

  function BookingService($http, $q, bookingConfig) {
    return {listByUserId: listByUserId, listAll: listAll};

    function listAll() {
      return $http.get(bookingConfig.baseUrl + 'list')
        .then(function (bookingsResponse) {
          return $q.resolve(bookingsResponse.data);
        })
        .catch(function (err) {
          return $q.reject(err);
        });
    }
    function listByUserId(userId) {
      if (!userId) {
        return $q.reject('User Id must be provided');
      }
      return $http.get(bookingConfig.baseUrl + 'bookings/' + userId)
        .then(function (bookingsResponse) {
          return $q.resolve(bookingsResponse.data);
        })
        .catch(function (err) {
          return $q.reject(err);
        });
    }
  }
})();
