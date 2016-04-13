var adminURL = "";
if(isproduction)
{
  adminURL =  "http://www.wohlig.co.in/demo/index.php";
}
else {
  adminURL = "http://localhost/demo/index.php";
}

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
  var navigation = [{
    name: "Dashboard",
    classis: "active",
    anchor: "home"
    // subnav: [{
    //   name: "Subnav1",
    //   classis: "active",
    //   link: "#/home"
    // }]
  }
  ,{
    name: "Create Match",
    classis: "active",
    anchor: "creatematch"
  },{
    name: "Edit Match",
    classis: "active",
    anchor: "editmatch"
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

  };
});
