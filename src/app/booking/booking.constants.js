/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('hospitalUi.booking')
    .constant('bookingConfig', {baseUrl:'http://localhost:8080/api/bookings/'});
})();
