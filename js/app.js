// JavaScript Document

var matchID = "";
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice',
  'command'
]);
firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  // for http request with session
  $httpProvider.defaults.withCredentials = true;
  $stateProvider
    .state('matches', {
      url: "/matches",
      templateUrl: "views/template.html",
      controller: 'MatchesCtrl'
    })
    .state('creatematch', {
      url: "/creatematch",
      templateUrl: "views/template.html",
      controller: 'CreateMatchCtrl'
    })
    .state('editmatch', {
      url: "/editmatch/:id",
      templateUrl: "views/template.html",
      controller: 'EditMatchCtrl'
    })
    .state('team', {
      url: "/team",
      templateUrl: "views/template.html",
      controller: 'TeamCtrl'
    })
    .state('createteam', {
      url: "/createteam",
      templateUrl: "views/template.html",
      controller: 'CreateTeamCtrl'
    })
    .state('editteam', {
      url: "/editteam/:id",
      templateUrl: "views/template.html",
      controller: 'EditTeamCtrl'
    })
    .state('user', {
      url: "/user",
      templateUrl: "views/template.html",
      controller: 'UserCtrl'
    })
    .state('createuser', {
      url: "/createuser",
      templateUrl: "views/template.html",
      controller: 'CreateUserCtrl'
    })
    .state('edituser', {
      url: "/edituser/:id",
      templateUrl: "views/template.html",
      controller: 'EditUserCtrl'
    })
    .state('adminuser', {
      url: "/adminuser",
      templateUrl: "views/template.html",
      controller: 'AdminUserCtrl'
    })
    .state('createadminuser', {
      url: "/createadminuser",
      templateUrl: "views/template.html",
      controller: 'CreateAdminUserCtrl'
    })
    .state('editadminuser', {
      url: "/editadminuser/:id",
      templateUrl: "views/template.html",
      controller: 'EditAdminUserCtrl'
    })
    .state('notification', {
      url: "/notification",
      templateUrl: "views/template.html",
      controller: 'NotificationCtrl'
    })
    .state('createnotification', {
      url: "/createnotification",
      templateUrl: "views/template.html",
      controller: 'CreateNotificationCtrl'
    })
    .state('editnotification', {
      url: "/editnotification/:id",
      templateUrl: "views/template.html",
      controller: 'EditNotificationCtrl'
    })
    .state('login', {
      url: "/login",
      templateUrl: "views/templateplain.html",
      controller: 'LoginCtrl'
    })
    .state('matchupdates', {
      url: "/matchupdates/:id",
      templateUrl: "views/template.html",
      controller: 'MatchUpdatesCtrl'
    });
  $urlRouterProvider.otherwise("/matches");
  $locationProvider.html5Mode(isproduction);
});


firstapp.directive('img', function($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function() {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});

firstapp.directive('fancyboxBox', function($document) {
  return {
    restrict: 'EA',
    replace: false,
    link: function(scope, element, attr) {
      var $element = $(element);
      var target;
      if (attr.rel) {
        target = $("[rel='" + attr.rel + "']");
      } else {
        target = element;
      }

      target.fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        closeBtn: true,
        helpers: {
          media: {}
        }
      });
    }
  };
});



function rateCalc(rate) {

  var realRate = parseFloat(rate) + 1;
  return (realRate / (realRate - 1)) - 1;
}

function getBalls(data) {
  var overs = parseInt(data);
  var balls = (data - overs) * 10;
  return Math.round(overs * 6 + balls);

}
