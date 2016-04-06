(function () {

  angular
    .module('sinsApp')
    .controller('DashCtrl', [
      'navService', 'Auth', '$mdSidenav', '$mdMedia', '$mdBottomSheet', '$log', '$q', '$state', '$mdToast',
      DashController
    ]);

  function DashController(navService, Auth, $mdSidenav, $mdMedia, $mdBottomSheet, $log, $q, $state, $mdToast, $scope) {
    var vm = this;

    vm.menuItems = [];
    vm.selectItem = selectItem;
    vm.toggleItemsList = toggleItemsList;
    vm.showActions = showActions;
    vm.title = $state.current.data.title;
    vm.showSimpleToast = showSimpleToast;
    vm.toggleRightSidebar = toggleRightSidebar;
    vm.isRightSidebarLockOpened = true;
    vm.isLeftSidebarLockOpened = true;
    vm.isLoggedIn = Auth.isLoggedIn;
    vm.isAdmin = Auth.isAdmin;
    vm.getCurrentUser = Auth.getCurrentUser;


    navService
      .loadAllItems()
      .then(function (menuItems) {
        vm.menuItems = [].concat(menuItems);
        
      });



    function toggleRightSidebar() {
      if ($mdMedia('gt-md')) {
        $mdSidenav('right').close();
        vm.isRightSidebarLockOpened = !vm.isRightSidebarLockOpened;
      } else {
        $mdSidenav('right').toggle();
      }


    }

    function toggleItemsList() {
      var pending = $mdBottomSheet.hide() || $q.when(true);

      pending.then(function () {
        if ($mdMedia('gt-md')) {
          $mdSidenav('left').close();
          vm.isLeftSidebarLockOpened = !vm.isLeftSidebarLockOpened;
        } else {
          $mdSidenav('left').toggle();
        }


      });
    }

    function selectItem(item) {
      vm.title = item.name;
      if (!$mdMedia('gt-md')) {
        vm.toggleItemsList();
      }
      vm.showSimpleToast(vm.title);
    }
    function selectAdmin(){
      vm.title='Admin';
      if (!$mdMedia('gt-md')) {
        vm.toggleItemsList();
      }
      vm.showSimpleToast(vm.title);
    }

    function showActions($event) {
      $mdBottomSheet.show({
        parent: angular.element(document.getElementById('content')),
        templateUrl: 'app/dash/partials/bottomSheet.html',
        controller: ['$mdBottomSheet', SheetController],
        controllerAs: "vm",
        bindToController: true,
        targetEvent: $event
      }).then(function (clickedItem) {
        clickedItem && $log.debug(clickedItem.name + ' clicked!');
      });

      function SheetController($mdBottomSheet) {
        var vm = this;

        vm.actions = [
          {
            name: 'Share',
            icon: 'share',
            url: 'https://twitter.com/intent/tweet?text=Angular%20Material%20Dashboard%20https://github.com/flatlogic/angular-material-dashboard%20via%20@flatlogicinc'
          },
          {name: 'Star', icon: 'star', url: 'https://github.com/flatlogic/angular-material-dashboard/stargazers'}
        ];

        vm.performAction = function (action) {
          $mdBottomSheet.hide(action);
        };
      }
    }

    function showSimpleToast(title) {
      $mdToast.show(
        $mdToast.simple()
          .content(title)
          .hideDelay(2000)
          .position('bottom right')
      );
    }
  }

})();
