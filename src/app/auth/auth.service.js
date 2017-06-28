/**
 * Created by cleophas on 2017/06/21.
 */
(function () {
  angular.module('hospitalUi.auth').factory('AuthService', AuthService);

  function AuthService($http, $q) {
    return {getCurrentUserId:getCurrentUserId, login: function (credential) {
      return $q.resolve({});
    }};
    
    function getCurrentUserId() {
      
    }
  }
})();
