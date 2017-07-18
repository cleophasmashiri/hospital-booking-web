/**
 * Created by cleophas on 2017/06/21.
 */
(function () {
  angular.module('hospitalUi.booking').factory('BookingService', BookingService);

  function BookingService($http, $q, mainConfig) {
    return {listByUserId: listByUserId, listAll: listAll, getBookingDetails: getBookingDetails};

    function getBookingDetails(instanceId) {
      return $http.get(mainConfig.baseUrl + 'booking/details/' + instanceId)
        .then(function (bookingsResponse) {
          return $q.resolve(bookingsResponse.data);
        })
        .catch(function (err) {
          return $q.reject(err);
        });
    }
    function listAll() {
      return $http.get(mainConfig.baseUrl + 'booking/list')
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
      return $http.get(mainConfig.baseUrl + 'booking/bookings/' + userId)
        .then(function (bookingsResponse) {
          return $q.resolve(bookingsResponse.data);
        })
        .catch(function (err) {
          return $q.reject(err);
        });
    }
  }
})();
