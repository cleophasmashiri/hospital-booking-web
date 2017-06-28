(function() {
  'use strict';

  angular
    .module('hospitalUi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
