(function() {
  'use strict';

  angular
    .module('hospitalUi')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(AuthService, $state) {
      var vm = this;
      function initialise() {
        vm.currentUser = AuthService.getCurrentUser();
      }
      initialise();
      vm.logout = function () {
        AuthService.logOut();
        $state.go('auth.login');
      };
    }
  }

})();
