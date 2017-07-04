(function() {
  'use strict';
  angular
    .module('hospitalUi')
    .controller('MainController', MainController);
  /** @ngInject */
  function MainController(AuthService) {
    var vm = this;
    function initialise() {
      vm.currentUser = AuthService.getCurrentUser();
    }
    initialise();
  }
})();
