/**
 * Created by cleophas on 2017/06/21.
 */
(function () {
  angular.module('hospitalUi.booking').factory('BookingService', BookingService);

  function BookingService($http, $q, bookingConfig) {
    return {listByUserId: listByUserId, listAll: listAll};

    function listAll() {
      return $q.resolve([{
        id:1,
        status: "New",
        name: "User1",
        cell: '0834343433',
        email: 'user1@google.com',
        date: new Date(), reason: 'Review'
      }, {
        id:2,
        status: "In-Progress",
        name: "User2", cell: '0844343433', email: 'user2@google.com', date: new Date(), reason: 'Sick'
      }]);
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
