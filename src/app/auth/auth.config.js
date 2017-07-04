/**
 * Created by cleophas on 2017/06/21.
 */
(function () {
  angular.module('hospitalUi.auth').config(authHtpConfig);
  function authHtpConfig($httpProvider) {
    $httpProvider.interceptors.push(authConfig);
    function authConfig($q, $cookieStore, $injector, $location) {
      return {
        request: function (config) {
          config.headers = config.headers || {};
          var authData = $cookieStore.get('authData');
          if (authData) {
            config.headers.user = config.headers.user || authData;
            //$cookieStore.set('authData', authData);
          }
          return config;
        },
        responseError: function (err) {
          if (err.status === 401) {
            $injector.get('AuthService').logOut();
            $location.path('/login');
          }
          return $q.reject(err);
        }
      }
    }
  }
})();
