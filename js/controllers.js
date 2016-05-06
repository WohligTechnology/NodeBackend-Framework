var globalfunction = {};
angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'ngMaterial', 'ngMessages'])


.controller('MatchesCtrl', function($scope, TemplateService, NavigationService, $timeout, $mdDialog, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("matches");
  $scope.menutitle = NavigationService.makeactive("Matches");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.matchForm = {};
  $scope.matchdata = [];
  $scope.matches = [];
  $scope.sizes = [
    "10",
    "20",
    "30",
    "50"
  ];

  $scope.loadMatches = function() {
    NavigationService.getAllMatches(function(data) {
      console.log(data);
      $scope.matches = data.data.data;
    });
  };
  $scope.loadMatches();
  // $scope.deleteMatches = function(id) {
  //   NavigationService.deleteMatchesData(id, function(data) {
  //
  //     if (data.value === true) {
  //       $scope.loadMatches();
  //     }
  //   });
  // };

  $scope.deleteClicked = function() {
    NavigationService.deleteMatchesData($scope.deleteId, function(data) {
      if (data.value === true) {
        $mdDialog.hide();
        $state.reload();
      }
      console.log("Delete Clicked");
    });
  };
  $scope.showConfirm = function(id) {
    $scope.deleteId = id;
    $mdDialog.show({
      scope: $scope,
      templateUrl: 'views/modal/confDelete.html'
    });
  };
  $scope.cancel = function() {
    $mdDialog.hide();
  };
})

.controller('AdminUserCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $mdDialog, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("adminuser");
    $scope.menutitle = NavigationService.makeactive("Admin User");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.adminuserForm = {};
    $scope.adminuserdata = [];
    $scope.adminusers = [];
    $scope.sizes = [
      "10",
      "20",
      "30",
      "50"
    ];

    $scope.loadAdminUsers = function() {
      NavigationService.getAllAdminUsers(function(data) {
        console.log(data);
        $scope.adminusers = data.data.data;
      });
    };
    $scope.loadAdminUsers();
    $scope.deleteClicked = function() {
      NavigationService.deleteAdminUsersData($scope.deleteId, function(data) {
        if (data.value === true) {
          $mdDialog.hide();
          $state.reload();
        }
        console.log("Delete Clicked");
      });
    };
    $scope.showConfirm = function(id) {
      $scope.deleteId = id;
      $mdDialog.show({
        scope: $scope,
        templateUrl: 'views/modal/confDelete.html'
      });
    };
    $scope.cancel = function() {
      $mdDialog.hide();
    };
  })
  .controller('UserCtrl', function($scope, TemplateService, NavigationService, $timeout, $mdDialog, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("user");
    $scope.menutitle = NavigationService.makeactive("User");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.userForm = {};
    $scope.userdata = [];
    $scope.users = [];
    $scope.sizes = [
      "10",
      "20",
      "30",
      "50"
    ];

    $scope.loadUsers = function() {
      NavigationService.getAllUsers(function(data) {
        console.log(data);
        $scope.users = data.data.data;
      });
    };
    $scope.loadUsers();
    $scope.deleteClicked = function() {
      NavigationService.deleteUsersData($scope.deleteId, function(data) {
        if (data.value === true) {
          $mdDialog.hide();
          $state.reload();
        }
        console.log("Delete Clicked");
      });
    };
    $scope.showConfirm = function(id) {
      $scope.deleteId = id;
      $mdDialog.show({
        scope: $scope,
        templateUrl: 'views/modal/confDelete.html'
      });
    };
    $scope.cancel = function() {
      $mdDialog.hide();
    };
  })
  .controller('TeamCtrl', function($scope, TemplateService, NavigationService, $timeout, $mdDialog, $mdMedia, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("team");
    $scope.menutitle = NavigationService.makeactive("Team");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.teamForm = {};
    $scope.teamdata = [];
    $scope.teams = [];
    $scope.sizes = [
      "10",
      "20",
      "30",
      "50"
    ];
    $scope.loadTeams = function() {
      NavigationService.getAllTeam(function(data) {
        $scope.teams = data.data;
      });
    };
    $scope.loadTeams();
    $scope.deleteClicked = function() {
      NavigationService.deleteTeamData($scope.deleteId, function(data) {
        if (data.value === true) {
          $mdDialog.hide();
          $state.reload();
        }
        console.log("Delete Clicked");
      });
    };
    $scope.showConfirm = function(id) {
      $scope.deleteId = id;
      $mdDialog.show({
        scope: $scope,
        templateUrl: 'views/modal/confDelete.html'
      });
    };
    $scope.cancel = function() {
      $mdDialog.hide();
    };
  })
  .controller('CreateTeamCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("teamdetail");
    $scope.menutitle = NavigationService.makeactive("Team");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.page = {
      header: "Create Team"
    };
    $scope.teamForm = {};
    $scope.message = 'disable';
    $scope.onChange = function(statusState) {
      $scope.message = statusState;
    };
    $scope.submitForm = function(formValid) {
      console.log('form values: ', formValid);
      NavigationService.teamCreateSubmit(formValid, function(data) {
        console.log(data);
      });
      $state.go("team");
    };
  })

.controller('EditTeamCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("teamdetail");
  $scope.menutitle = NavigationService.makeactive("Team");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.page = {
    header: "Edit Team"
  };
  $scope.message = 'disable';
  $scope.onChange = function(statusState) {
    $scope.message = statusState;
  };

  $scope.teamForm = {};

  NavigationService.getOneTeam($stateParams.id, function(data) {
    $scope.project = data.data;
    console.log('teamForm', $scope.teamForm);
  });

  $scope.submitForm = function(formValid) {
    console.log('form values: ', $scope.project);

    NavigationService.editTeamSubmit(formValid, function(data) {
      // console.log('notification', $scope.notificationForm);
      console.log(data);
    });

    $state.go("team");
  };
})

.controller('CreateUserCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("userdetail");
  $scope.menutitle = NavigationService.makeactive("User");
  TemplateService.title = $scope.menutitle;
  $scope.userForm = {};
  $scope.nomatch = false;
  $scope.navigation = NavigationService.getnav();
  $scope.page = {
    header: "Create User"
  };
  $scope.message = 'disable';
  $scope.onChange = function(statusState) {
    $scope.message = statusState;
  };

  $scope.submitForm = function(input, formValid) {
    $scope.nomatch = false;
    console.log('form values: ', formValid);
    console.log(input);
    if (formValid.$valid) {
      if (input.password == input.confirmpassword) {
        NavigationService.userCreateSubmit(input, function(data) {
          console.log(data);
          $state.go("user");
        });
      } else {
        $scope.nomatch = true;
      }
    } else {

    }

  };
})

.controller('EditUserCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("userdetail");
  $scope.menutitle = NavigationService.makeactive("User");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.userForm = {};
  $scope.page = {
    header: "Edit User"
  };
  $scope.nomatch = false;
  $scope.message = 'disable';
  $scope.onChange = function(statusState) {
    $scope.message = statusState;
  };
  $scope.adminForm = {};

  NavigationService.getOneUser($stateParams.id, function(data) {
    $scope.project = data.data;
    $scope.project.expiry = new Date(data.data.expiry);
    console.log('userForm', $scope.adminForm);
  });

  $scope.submitForm = function(input, formValid) {
    console.log('form values: ', $scope.project);
    // if (formValid.$valid) {
    if (input.password == input.confirmpassword) {
      NavigationService.editUserSubmit(input, function(data) {
        console.log(data);
        $state.go("user");
      });
    } else {
      $scope.nomatch = true;
    }
    // } else {
    //
    // }

  };
})

.controller('CreateAdminUserCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("adminuserdetail");
  $scope.menutitle = NavigationService.makeactive("Admin User");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.adminForm = {};
  $scope.page = {
    header: "Create Admin User"
  };
  $scope.accesslevels = [
    "Admin",
    "Operator"
  ];
  $scope.message = 'disable';
  $scope.onChange = function(statusState) {
    $scope.message = statusState;
  };
  $scope.submitForm = function(formValid) {
    console.log('form values: ', formValid);
    NavigationService.adminuserCreateSubmit(formValid, function(data) {
      console.log(data);
    });
    $state.go("adminuser");
  };
})

.controller('EditAdminUserCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("adminuserdetail");
  $scope.menutitle = NavigationService.makeactive("Admin User");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.page = {
    header: "Edit Admin User"
  };
  $scope.accesslevels = [
    "Admin",
    "Operator"
  ];
  $scope.message = 'disable';
  $scope.onChange = function(statusState) {
    $scope.message = statusState;
  };
  $scope.adminForm = {};

  NavigationService.getOneAdminUser($stateParams.id, function(data) {
    $scope.project = data.data;
    console.log('adminForm', $scope.adminForm);
  });

  $scope.submitForm = function(formValid) {
    console.log('form values: ', $scope.project);
    NavigationService.editAdminUserSubmit(formValid, function(data) {
      console.log(data);
    });

    $state.go("adminuser");
  };
})

.controller('NotificationCtrl', function($scope, TemplateService, NavigationService, $stateParams, $timeout, $state, $mdDialog) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("notification");
    $scope.menutitle = NavigationService.makeactive("Notification");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.notificationForm = {};
    $scope.notificationdata = [];
    $scope.notications = [];
    $scope.sizes = [
      "10",
      "20",
      "30",
      "50"
    ];
    $scope.loadNotification = function() {
      NavigationService.getAllNotification(function(data) {
        console.log(data);
        $scope.notifications = data.data.data;
      });
    };
    $scope.loadNotification();

    $scope.deleteClicked = function() {
      NavigationService.deleteNotificationData($scope.deleteId, function(data) {
        if (data.value === true) {
          $mdDialog.hide();
          $state.reload();
        }
        console.log("Delete Clicked");
      });
    };
    $scope.showConfirm = function(id) {
      $scope.deleteId = id;
      $mdDialog.show({
        scope: $scope,
        templateUrl: 'views/modal/confDelete.html'
      });
    };
    $scope.cancel = function() {
      $mdDialog.hide();
    };
  })
  .controller('CreateNotificationCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
    $scope.template = TemplateService.changecontent("notificationdetail");
    $scope.menutitle = NavigationService.makeactive("Notification");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.notificationForm = {};
    $scope.page = {
      header: "Create Notification"
    };
    $scope.submitForm = function(formValid) {
      console.log('form values: ', formValid);
      NavigationService.notificationCreateSubmit(formValid, function(data) {
        console.log(data);
      });
      $state.go("notification");
    };
  })

.controller('EditNotificationCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("notificationedit");
  $scope.menutitle = NavigationService.makeactive("Notification");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.notificationForm = {};
  $scope.page = {
    header: "Edit Notification"
  };
  NavigationService.getOneNotification($stateParams.id, function(data) {
    $scope.project = data.data;
    console.log('notificationForm', $scope.notificationForm);
  });

  $scope.submitForm = function(formValid) {
    console.log('form values: ', $scope.project);

    NavigationService.editNotificationSubmit(formValid, function(data) {
      // console.log('notification', $scope.notificationForm);
      console.log(data);
      $state.go("notification");
    });

  };
})

.controller('CreateMatchCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("matchesdetail");
  $scope.menutitle = NavigationService.makeactive("Matches");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.matchForm = {};
  $scope.project = {};
  $scope.page = {
    header: "Create Match"
  };
  $scope.batFirst = [{
    id: 0,
    name: "team1"
  }, {
    id: 1,
    name: "team2"
  }];
  $scope.teams = [];
  NavigationService.getAllTeam(function(data) {
    $scope.teams = data.data;
  });
  $scope.submitForm = function(project) {
    console.log(project);
    var project2 = _.clone(project);
    project2.newOvers = project2.overs;

    NavigationService.matchesCreateSubmit(project2, function(data) {
      console.log(project2);
      $state.go("matches");
    });

  };
})

.controller('EditMatchCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("matchesdetail");
  $scope.menutitle = NavigationService.makeactive("Matches");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.page = {
    header: "Edit Match"
  };
  $scope.batFirst = [{
    id: 1,
    name: "team1"
  }, {
    id: 2,
    name: "team2"
  }];
  $scope.matchForm = {};
  $scope.teams = [];
  NavigationService.getAllTeam(function(data) {
    $scope.teams = data.data;
  });

  NavigationService.getOneMatch({
    "_id": $stateParams.id
  }, function(data) {

    $scope.project = data.data;
    $scope.project.team1 = $scope.project.team1._id;
    $scope.project.team2 = $scope.project.team2._id;
    $scope.$apply();
  });

  $scope.submitForm = function(formValid) {
    console.log('form values: ', $scope.project);
    formValid.newOvers = formValid.overs;
    NavigationService.editMatchSubmit(formValid, function(data) {
      // console.log('notification', $scope.notificationForm);
      console.log(data);
      $state.go("matches");
    });

  };
})

.controller('LoginCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("login");
  $scope.menutitle = NavigationService.makeactive("Login");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  TemplateService.header = "";
  TemplateService.footer = "";
  TemplateService.sidemenu = "";
})

.controller('MatchUpdatesCtrl', function($http, $scope, TemplateService, NavigationService, $timeout, $stateParams, $mdToast, $document, $filter) {
    //Used to name the .html file

    $scope.changeSuspend = function(value) {
      $http.post(adminURL + "session/changeSuspended", {
        "_id": $stateParams.id,
      }).then(function() {
        console.log("Change the Suspended");
      });
    };
    var form = {
      "_id": $stateParams.id
    };


    $scope.matchSave = function(match) {
      var newMatch = {
        "_id": match._id,
        team1Runs: match.team1Runs,
        team1Wicket: match.team1Wicket,
        team1Overs: match.team1Overs,
        team2Runs: match.team2Runs,
        team2Wicket: match.team2Wicket,
        team2Overs: match.team2Overs,
        rate1: 1,
        rate2: 1
      };
      if (match.favorite == 1) {
        newMatch.rate1 = match.matchRate1;
        newMatch.rate2 = match.matchRate2;
      } else {
        newMatch.rate1 = match.matchRate3;
        newMatch.rate2 = match.matchRate4;
      }
      $http.post(adminURL + "match/save", newMatch).then(function() {
        console.log("Change the Suspended");
      });
    };

    $scope.dlSave = function(overs, runs) {
      console.log(overs);
      console.log(runs);
      $http.post(adminURL + "session/changeDlruns", {
        "changeDlruns": runs+"",
        "changeNewOvers": overs+"",
        "_id": $stateParams.id,
      }).then(function() {
        console.log("Change the Suspended");
      });
    };

    globalfunction.changeFav = function() {
      if ($scope.match.favorite == 1) {
        $scope.match.favorite = 2;
      } else {
        $scope.match.favorite = 1;

      }
      $scope.$apply();
    };

    $scope.sessionChange = function(key, sessionID, sessionRuns) {
      console.log(sessionRuns);
      if (key.keyCode == 13) {
        $http.post(adminURL + "session/sessionRuns2", {
          _id: sessionID,
          run: parseInt(sessionRuns)
        }).then(function() {
          console.log("Session Modified Added");
        });
      }
    };

    $scope.tabchange = function(tab, a) {
      $scope.tab = tab;
      if (a == 1) {
        // $ionicScrollDelegate.scrollTop();
        $scope.classa = "actives";
        $scope.classb = '';
      } else {
        // $ionicScrollDelegate.scrollTop();
        $scope.classa = '';
        $scope.classb = "actives";
      }
    };

    matchID = $stateParams.id;
    var SocketFunction = function(data, isSocket) {
      data.data.session1 = _.filter(data.data.session, function(n) {
        return n.inning == 1;
      });
      data.data.session2 = _.filter(data.data.session, function(n) {
        return n.inning == 2;
      });
      $scope.match = data.data;
      $scope.match.isSecondInning = $scope.match.bat != $scope.match.firstBat;

      if ($scope.match.firstBat == 1) {
        $scope.match.inning1Overs = $scope.match.team1Overs;
        $scope.match.inning2Overs = $scope.match.team2Overs;
      } else if ($scope.match.firstBat == 2) {
        $scope.match.inning1Overs = $scope.match.team2Overs;
        $scope.match.inning2Overs = $scope.match.team1Overs;
      }

      if ($scope.match.isSecondInning) {

        $scope.match.inning1Overs = 99999;

        // $scope.tabchange('second', 2);
        if ($scope.match.bat == 1) {
          $scope.match.playedBalls = getBalls($scope.match.team1Overs);
          $scope.match.currentRuns = $scope.match.team1Runs;
          $scope.match.targetRuns = $scope.match.team2Runs + 1;
        } else if ($scope.match.bat == 2) {
          $scope.match.playedBalls = getBalls($scope.match.team2Overs);
          $scope.match.currentRuns = $scope.match.team2Runs;
          $scope.match.targetRuns = $scope.match.team1Runs + 1;
        }
        $scope.match.totalBalls = getBalls($scope.match.newOvers);
        $scope.match.remainingBalls = $scope.match.totalBalls - $scope.match.playedBalls;

        $scope.match.remainingRuns = $scope.match.targetRuns - $scope.match.currentRuns;

      }
      if ($scope.match.favorite == 1) {
        $scope.match.matchRate1 = $filter('number')($scope.match.rate1, 2);
        $scope.match.matchRate2 = $filter('number')($scope.match.rate2, 2);
        $scope.match.matchRate3 = $filter('number')(rateCalc($scope.match.matchRate2), 2);
        $scope.match.matchRate4 = $filter('number')(rateCalc($scope.match.matchRate1), 2);
      }
      if ($scope.match.favorite == 2) {
        $scope.match.matchRate3 = $filter('number')($scope.match.rate1, 2);
        $scope.match.matchRate4 = $filter('number')($scope.match.rate2, 2);

        $scope.match.matchRate1 = $filter('number')(rateCalc($scope.match.matchRate4), 2);
        $scope.match.matchRate2 = $filter('number')(rateCalc($scope.match.matchRate3), 2);
      }
      console.log($scope.match);
      $scope.$apply();
    };


    io.socket.on('message', function(data) {
      SocketFunction(data, true);
    });

    $scope.template = TemplateService.changecontent("matchupdates");
    $scope.menutitle = NavigationService.makeactive("Matches");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.matchForm = {};
    // $scope.teams = [];
    // NavigationService.getTeams(function(data) {
    //   $scope.teams = data.data;
    // })
    NavigationService.getOneMatch(form, function(data) {
      SocketFunction(data);
    });

    $scope.submitteamForm = function(formValid) {
      console.log('form values: ', $scope.project);
      NavigationService.editMatchTeamSubmit(formValid, function(data) {
        console.log(data);
        if (data.value === true) {
          $mdToast.show(
            $mdToast.simple()
            .textContent('Sucessfully Submited')
            // .position(top)
            .hideDelay(3000)
          );
        } else {

        }
        // if (formValid.$valid) {
        //   var toast = $mdToast.simple()
        //     .textContent('Soft')
        // } else {
        //   var toast = $mdToast.simple()
        //     .textContent('Hard')
        // }
      });
    };

    // $scope.submitteam2Form = function(formValid) {
    //   console.log('form values: ', $scope.project);
    //   NavigationService.editMatchTeam2Submit(formValid, function(data) {
    //     console.log(data);
    //     if (formValid.$valid) {
    //       var toast = $mdToast.simple()
    //         .textContent('Action Toast!')
    //     } else {
    //
    //     }
    //   });
    // };


    // $scope.submitForm = function(input, formValid) {
    //   $scope.nomatch = false;
    //   console.log('form values: ', formValid);
    //   console.log(input);
    //   if (formValid.$valid) {
    //     if (input.password == input.confirmpassword) {
    //       NavigationService.userCreateSubmit(input, function(data) {
    //         console.log(data);
    //         $state.go("user");
    //       })
    //     } else {
    //       $scope.nomatch = true;
    //     }
    //   } else {
    //
    //   }
    //
    // };
  })
  .controller('headerctrl', function($scope, TemplateService, $timeout, $log, $mdSidenav, $uibModal) {
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
      };
    }
    $scope.close = function() {
      $mdSidenav('left').close()
        .then(function() {
          $log.debug("close LEFT is done");
        });
    };

    // var modalInstance = '';
    // $scope.callback = "";
    // globalfunction.confDel = function(callback) {
    //   modalInstance = $uibModal.open({
    //     animation: $scope.animationsEnabled,
    //     templateUrl: 'views/modal/confDelete.html',
    //     size: 'sm',
    //     scope: $scope
    //   });
    //
    //   modalInstance.result.then(function(selectedItem) {
    //     $scope.selected = selectedItem;
    //   }, function() {
    //   });
    //   $scope.callback = callback;
    // };
  });
