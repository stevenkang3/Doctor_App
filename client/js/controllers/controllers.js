var counter = 0;
app.controller('AppsController', function($scope, AppsFactory) {
var that = this;

while(counter<1){
  name = prompt('Please enter your name to make an appointment');
    if(name){
      AppsFactory.setUser(name);
      counter ++;
    }
  }

function getUser(){
  AppsFactory.getUser(function(name){
  $scope.name = name;
  that.name = name;
})
}
getUser();

function getApps(){
  AppsFactory.getApps(function(apps){
    that.apps = apps;
    $scope.newApp = {};
    var today = new Date();
    var previousDay = new Date(today);
    previousDay.setDate(today.getDate()-1);
    console.log(previousDay);
    that.today = today.toISOString();
    that.previousDay = previousDay.toISOString();
  })
}
getApps();

this.addApp = function(newApp) {
  console.log('con:', newApp);
  AppsFactory.addApp(newApp, function(response){
    console.log('con',response);
    $scope.errors = response;
    getApps();
  })
}

this.destroyApp = function(appointment){

  AppsFactory.destroyApp(appointment, function(){
    getApps();
  })
}

this.logOut = function(){
      counter = 0;
  }




});
