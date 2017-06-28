/**
 * Created by cleophas on 2017/06/21.
 */
(function () {
  angular.module('hospitalUi.auth').config(authHtpConfig);
  function authHtpConfig($httpProvider) {
    $httpProvider.interceptors.push(authConfig);
    function authConfig($q, $cookies, $injector) {
      return {
        request: function (config) {
          config.headers = config.headers || {};
          var authData = $cookies.get('authData');
          if (authData) {
            config.headers.user = config.headers.user || authData;
            $cookies.set('authData', authData);
          }
          return config;
        },
        responseError: function (err) {
          if (err.status === 401) {
            $location.path('/login');
            var authService = $injector.get('Authentication');
            authService.logOut();
          }
          return $q.reject(err);
        }
      }
    }
  }
})();
