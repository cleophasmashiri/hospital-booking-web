/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('hospitalUi.auth').
    //constant('authConfig', {baseUrl:'http://localhost:8083/api/'});
    constant('authConfig', {baseUrl:' https://hospital-booking-api.herokuapp.com/api/'});
})();
