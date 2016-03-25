(function(){

  angular
    .module('sinsApp')
    .controller('TableCtrl', [
      'tableService',
      TableController
    ]);

  function TableController(tableService,$scope) {
    var vm = this;

    vm.tableData = [];

    tableService
      .loadAllItems()
      .then(function(tableData) {
        vm.tableData = [].concat(tableData);
      });
  }

})();
