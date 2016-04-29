angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'ngMaterial', 'ngMessages'])

.controller('MatchesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("matches");
    $scope.menutitle = NavigationService.makeactive("Matches");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.sizes = [
      "10",
      "20",
      "30",
      "50"
    ];
  })
  .controller('AdminUserCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("adminuser");
    $scope.menutitle = NavigationService.makeactive("Admin User");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.sizes = [
      "10",
      "20",
      "30",
      "50"
    ];
  })
  .controller('UserCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("user");
    $scope.menutitle = NavigationService.makeactive("User");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.sizes = [
      "10",
      "20",
      "30",
      "50"
    ];
  })
  .controller('CreateUserCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("userdetail");
    $scope.menutitle = NavigationService.makeactive("User");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.page = {
        header: "Create User"
    };
    // $scope.project = {
    //   cb1: true,
    //   cb4: true,
    //   cb5: false
    // };
    $scope.message = 'disable';
    $scope.onChange = function(statusState) {
      $scope.message = statusState;
    };
  })
  .controller('EditUserCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("userdetail");
    $scope.menutitle = NavigationService.makeactive("User");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.page = {
        header: "Edit User"
    };
    $scope.message = 'disable';
    $scope.onChange = function(statusState) {
      $scope.message = statusState;
    };
  })
  .controller('CreateAdminUserCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("adminuserdetail");
    $scope.menutitle = NavigationService.makeactive("Admin User");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.page = {
        header: "Create Admin User"
    };
    // $scope.project = {
    //   cb1: true,
    //   cb4: true,
    //   cb5: false
    // };
    $scope.message = 'disable';
    $scope.onChange = function(statusState) {
      $scope.message = statusState;
    };
  })

  .controller('EditAdminUserCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("adminuserdetail");
    $scope.menutitle = NavigationService.makeactive("Admin User");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.page = {
        header: "Edit Admin User"
    };
    // $scope.project = {
    //   cb1: true,
    //   cb4: true,
    //   cb5: false
    // };
    $scope.message = 'disable';
    $scope.onChange = function(statusState) {
      $scope.message = statusState;
    };
  })
  .controller('NotificationCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("notification");
    $scope.menutitle = NavigationService.makeactive("Notification");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.sizes = [
      "10",
      "20",
      "30",
      "50"
    ];
  })
  .controller('CreateNotificationCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("notificationdetail");
    $scope.menutitle = NavigationService.makeactive("Notification");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.page = {
        header: "Create Notification"
    };
  })
  .controller('EditNotificationCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("notificationdetail");
    $scope.menutitle = NavigationService.makeactive("Notification");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.page = {
        header: "Edit Notification"
    };
  })
  .controller('CreateMatchCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("creatematch");
    $scope.menutitle = NavigationService.makeactive("Create Match");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.page = {
        header: "Create Match"
    };
  })
  .controller('EditMatchCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("creatematch");
    $scope.menutitle = NavigationService.makeactive("Create Match");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.page = {
        header: "Edit Match"
    };
  })
  .controller('LoginCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("login");
    $scope.menutitle = NavigationService.makeactive("Login");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "";
    TemplateService.footer = "";
    TemplateService.sidemenu = "";
  })
  .controller('MatchUpdatesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("matchupdates");
    $scope.menutitle = NavigationService.makeactive("Match Updates");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('headerctrl', function($scope, TemplateService, $timeout, $log, $mdSidenav) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      $(window).scrollTop(0);
    });
    $scope.toggleLeft = buildDelayedToggler('left');
    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;
      return function debounced() {
        var context = $scope,
          args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        $mdSidenav(navID)
          .toggle()
          .then(function() {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }

    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
          .then(function() {
            $log.debug("toggle " + navID + " is done");
          });
      }
    }
    $scope.close = function() {
      $mdSidenav('left').close()
        .then(function() {
          $log.debug("close LEFT is done");
        });
    };
  });
