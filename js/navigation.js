var adminURL = "http://192.168.1.111/";
var imgpath = adminURL + "upload/readFile";
var uploadURL = adminURL + "upload";
if (isproduction) {
  adminURL = "http://www.wohlig.co.in/demo/index.php";
} else {
  adminURL = "http://localhost/demo/index.php";
}

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
  var navigation = [{
    name: "Matches",
    classis: "active",
    anchor: "matches"
  }, {
    name: "Admin User",
    classis: "active",
    anchor: "adminuser"
  }, {
    name: "User",
    classis: "active",
    anchor: "user"
  }, {
    name: "Notification",
    classis: "active",
    anchor: "notification"
  }];

  return {
    getnav: function() {
      return navigation;
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },

    notifications: function(callback) {
      $http({
        url: adminURL + 'notification/getAll',
        method: 'POST'
      }).sucess(callback);
    },
    saveNotificationContent: function(notificationData, callback) {
      $http({
        url: adminURL + 'notification/save',
        method: 'POST',
        withCredentials: true,
        data: notificationData
      }).sucess(callback);
    },
    insertData: function(notificationArr, callback) {
      $http({
        url: adminURL + 'notification/insertData',
        method: 'POST',
        withCredentials: true,
        data: notificationArr
      }).sucess(callback);
    },
  };
});
