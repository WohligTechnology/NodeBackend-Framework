// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  // for http request with session
  $httpProvider.defaults.withCredentials = true;
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "views/template.html",
      controller: 'HomeCtrl'
    })
    .state('user', {
      url: "/user",
      templateUrl: "views/template.html",
      controller: 'UserCtrl'
    })
    .state('userdetail', {
      url: "/userdetail",
      templateUrl: "views/template.html",
      controller: 'UserDetailCtrl'
    })
    .state('adminuser', {
      url: "/adminuser",
      templateUrl: "views/template.html",
      controller: 'AdminUserCtrl'
    })
    .state('adminuserdetail', {
      url: "/adminuserdetail",
      templateUrl: "views/template.html",
      controller: 'AdminUserDetailCtrl'
    })
    .state('notification', {
      url: "/notification",
      templateUrl: "views/template.html",
      controller: 'NotificationCtrl'
    })
    .state('notificationdetail', {
      url: "/notificationdetail",
      templateUrl: "views/template.html",
      controller: 'NotificationDetailCtrl'
    })
    .state('creatematch', {
      url: "/creatematch",
      templateUrl: "views/template.html",
      controller: 'CreateMatchCtrl'
    })
    .state('login', {
      url: "/login",
      templateUrl: "views/templateplain.html",
      controller: 'LoginCtrl'
    })
    .state('matchupdates', {
      url: "/matchupdates",
      templateUrl: "views/template.html",
      controller: 'MatchUpdatesCtrl'
    });
  $urlRouterProvider.otherwise("/home");
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
