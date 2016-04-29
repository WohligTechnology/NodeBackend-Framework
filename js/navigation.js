var adminURL = "http://localhost:1337/";
var imgpath = adminURL + "upload/readFile";
var uploadURL = adminURL + "upload";
// if (isproduction) {
//   adminURL = "http://www.wohlig.co.in/demo/index.php/";
// } else {
//   adminURL = "http://localhost/demo/index.php/";
// }

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
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

    notificationViewAll: function(callback) {
      $http({
        url: adminURL + 'notificationtext/findLimited',
        method: 'POST'
      }).sucess(callback);
    },
    notificationCreateSubmit: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminURL + 'notificationtext/save',
        method: 'POST',
        withCredentials: true,
        data: {
          "title": formData.title,
        }
      }).success(callback);
    },
    insertData: function(notificationArr, callback) {
      $http({
        url: adminURL + 'notificationtext/insertData',
        method: 'POST',
        withCredentials: true,
        data: notificationArr
      }).sucess(callback);
    },
    deleteNotificationData: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminURL + 'notificationtext/delete',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": formData.id,
        }
      }).success(callback);
    },



    adminuserViewAll: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminURL + 'adminuser/findLimited',
        method: 'POST',
        withCredentials: true,
        data: {
          "name": formData.name,
          "email": formData.email,
        }
      }).success(callback);
    },
    deleteadminuserData: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminURL + 'adminuser/delete',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": formData.id
        }
      }).success(callback);
    },
    adminuserCreateSubmit: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminURL + 'adminuser/save',
        method: 'POST',
        withCredentials: true,
        data: {
          "email": formData.email,
          "password": formData.password,
          "status": formData.status,
        }
      }).success(callback);
    },
    getAdminUserEditDetail: function(id, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminURL + 'adminuser/getOne',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": id
        }
      }).success(callback);
    },
    editAdminUserSubmit: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminURL + 'adminuser/save',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": formData._id,
          "name": formData.name,
          "email": formData.email
        }
      }).success(callback);
    },

    userViewAll: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminURL + 'user/findLimited',
        method: 'POST',
        withCredentials: true,
        data: {
          "name": formData.name,
          "email": formData.email,
        }
      }).success(callback);
    },
    deleteuserData: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminURL + 'user/delete',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": formData.id
        }
      }).success(callback);
    },
    userCreateSubmit: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminURL + 'user/save',
        method: 'POST',
        withCredentials: true,
        data: {
          "email": formData.email,
          "password": formData.password,
          "status": formData.status,
        }
      }).success(callback);
    },
    getUserEditDetail: function(id, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminURL + 'user/getOne',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": id
        }
      }).success(callback);
    },
    editUserSubmit: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminURL + 'user/save',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": formData._id,
          "name": formData.name,
          "email": formData.email
        }
      }).success(callback);
    },


    matchViewAll: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminURL + 'match/findLimited',
        method: 'POST',
        withCredentials: true,
        data: {
          "name": formData.name,
          "email": formData.email,
        }
      }).success(callback);
    },
    deletematchData: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminURL + 'match/delete',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": formData.id
        }
      }).success(callback);
    },
    matchCreateSubmit: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminURL + 'match/save',
        method: 'POST',
        withCredentials: true,
        data: {
          "team1": formData.team1,
          "team2": formData.team2,
          "tournament": formData.tournament,
          "overs": formData.overs,
        }
      }).success(callback);
    },
    getmatchEditDetail: function(id, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminURL + 'adminuser/getOne',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": id
        }
      }).success(callback);
    },
    editMatchSubmit: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminURL + 'adminuser/save',
        method: 'POST',
        withCredentials: true,
        data: {
          "team1": formData.team1,
          "team2": formData.team2,
          "tournament": formData.tournament,
          "overs": formData.overs,
        }
      }).success(callback);
    },
  };
});
