var command = angular.module('command', []);
command.directive('command', function($document) {
  return {
    restrict: 'E',
    replace: false,
    templateUrl: 'views/directive/command.html',
    link: function(scope, element, attr) {
      scope.command.input = "123";
      scope.commandChange = function() {
          console.log("Change");
      };
    }
  };
});
