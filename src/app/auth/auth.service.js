/**
 * Created by cleophas on 2017/06/21.
 */
(function () {
  angular.module('hospitalUi.auth').factory('AuthService', AuthService);
  function AuthService($http, $q, mainConfig, $cookieStore) {
    return {getCurrentUser: getCurrentUser, login: login, isAuthorised: isAuthorised, logOut: logOut, register:register};
    function login(credential) {
      return $http({
        method: 'post',
        url: mainConfig.baseUrl + 'auth/login',
        data: credential,
        headers: {'Content-Type': 'application/json'}
      })
        .then(function (res) {
          credential.roles = res.data;
          $cookieStore.put('authData', credential);
          return $q.resolve(res.data);
        })
        .catch(function (err) {
          return $q.reject(err);
        });
    }
    function register(credential) {
      return $http({
        method: 'post',
        url: mainConfig.baseUrl + 'auth/register',
        data: credential,
        headers: {'Content-Type': 'application/json'}
      })
        .then(function (res) {
          credential.roles = res.data;
          $cookieStore.put('authData', credential);
          return $q.resolve(res.data);
        })
        .catch(function (err) {
          return $q.reject(err);
        });
    }
    function getCurrentUser() {
      return $cookieStore.get('authData');
    }
    function isAuthorised(allowedRoles) {
      var authData = $cookieStore.get('authData');
      return authData && authData.roles && authData.roles.length > 0 && checkHasRole(allowedRoles, authData.roles);
    }
    function checkHasRole(allowedRoles, userRoles) {
      hasRole = false;
      userRoles.forEach(function (role) {
        if (allowedRoles.indexOf(role) > -1) {
          hasRole = true;
        }
      });
      return hasRole;
    }
    function logOut() {
      if ($cookieStore.get('authData')) {
        $cookieStore.remove('authData');
      }
    }
  }
})();
