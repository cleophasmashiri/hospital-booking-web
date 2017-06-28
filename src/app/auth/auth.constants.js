/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('hospitalUi.auth')
    .constant('authConfig', {baseUrl:'http://localhost:8080/api/bookings/'});
})();
