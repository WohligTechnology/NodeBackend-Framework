var adminURL = "http://192.168.1.112:1337/";
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
    name: "Team",
    classis: "active",
    anchor: "team"
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

    getAllTeam: function(callback) {
      $http({
        url: adminURL + 'team/find',
        method: 'POST',
        data: {}
      }).success(callback);
    },

    teamCreateSubmit: function(formData, callback) {
      console.log('form data: ', formData);
      $http({
        url: adminURL + 'team/save',
        method: 'POST',
        withCredentials: true,
        data: {
          "name": formData.name,
        }
      }).success(callback);
    },
    //
    // insertData: function(notificationArr, callback) {
    //   $http({
    //     url: adminURL + 'notificationtext/insertData',
    //     method: 'POST',
    //     withCredentials: true,
    //     data: notificationArr
    //   }).sucess(callback);
    // },

    deleteTeamData: function(id, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminURL + 'team/delete',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": id
        }
      }).success(callback);
    },
    getOneTeam: function(id, callback) {
      $http({
        url: adminURL + 'team/findone',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": id
        }
      }).success(callback);
    },
    editTeamSubmit: function(formData, callback) {
      console.log(formData);
      $http({
        url: adminURL + 'team/save',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": formData._id,
          "name": formData.name
        }
      }).success(callback);
    },

    getAllNotification: function(callback) {
      $http({
        url: adminURL + 'notificationtext/findLimited',
        method: 'POST',
        data: {
          "search": "",
          "pagesize": 5000,
          "pagenumber": 1,
        }
      }).success(callback);
    },

    notificationCreateSubmit: function(formData, callback) {
      console.log('form data: ', formData);
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

    deleteNotificationData: function(id, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminURL + 'notificationtext/delete',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": id
        }
      }).success(callback);
    },
    getOneNotification: function(id, callback) {
      $http({
        url: adminURL + 'notificationtext/findone',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": id
        }
      }).success(callback);
    },
    editNotificationSubmit: function(formData, callback) {
      console.log(formData);
      $http({
        url: adminURL + 'notificationtext/save',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": formData._id,
          "title": formData.title
        }
      }).success(callback);
    },


    getAllAdminUsers: function(callback) {
      $http({
        url: adminURL + 'adminuser/findLimited',
        method: 'POST',
        data: {
          "search": "",
          "pagesize": 500,
          "pagenumber": 1,
        }
      }).success(callback);
    },

    deleteAdminUsersData: function(id, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminURL + 'adminuser/delete',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": id
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
          "accesslevel": formData.accesslevel,
        }
      }).success(callback);
    },

    getOneAdminUser: function(id, callback) {
      $http({
        url: adminURL + 'adminuser/findone',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": id
        }
      }).success(callback);
    },
    editAdminUserSubmit: function(formData, callback) {
      console.log(formData);
      $http({
        url: adminURL + 'adminuser/save',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": formData._id,
          "email": formData.email,
          "password": formData.password,
          "status": formData.status,
          "accesslevel": formData.accesslevel,
        }
      }).success(callback);
    },

    getAllUsers: function(callback) {
      $http({
        url: adminURL + 'user/findLimited',
        method: 'POST',
        data: {
          "search": "",
          "pagesize": 5000,
          "pagenumber": 1,
        }
      }).success(callback);
    },

    deleteUsersData: function(id, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminURL + 'user/delete',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": id
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
          "name": formData.name,
          "mobile": formData.mobile,
          "password": formData.password,
          "status": formData.status,
          "expiry": formData.expiry,
        }
      }).success(callback);
    },
    getOneUser: function(id, callback) {
      $http({
        url: adminURL + 'user/findone',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": id
        }
      }).success(callback);
    },
    editUserSubmit: function(formData, callback) {
      console.log(formData);
      $http({
        url: adminURL + 'user/save',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": formData._id,
          "name": formData.name,
          "mobile": formData.mobile,
          "password": formData.password,
          "expiry": formData.expiry,
        }
      }).success(callback);
    },
    getAllMatches: function(callback) {
      $http({
        url: adminURL + 'match/findLimited',
        method: 'POST',
        data: {
          "search": "",
          "pagesize": 500,
          "pagenumber": 1,
        }
      }).success(callback);
    },

    deleteMatchesData: function(id, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminURL + 'match/delete',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": id
        }
      }).success(callback);
    },
    matchesCreateSubmit: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminURL + 'match/save',
        method: 'POST',
        withCredentials: true,
        data: {
          "cupName": formData.cupName,
          "status": formData.status,
          "team1": formData.team1,
          "team2": formData.team2,
          "overs": formData.overs,
        }
      }).success(callback);
    },
    getOneMatch: function(id, callback) {
      $http({
        url: adminURL + 'match/findOneForBackend',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": id
        }
      }).success(callback);
    },
    editMatchSubmit: function(formData, callback) {
      console.log(formData);
      $http({
        url: adminURL + 'match/save',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": formData._id,
          "cupName": formData.cupName,
          "status": formData.status,
          "team1": formData.team1,
          "team2": formData.team2,
          "overs": formData.overs,
        }
      }).success(callback);
    },
  };
});
