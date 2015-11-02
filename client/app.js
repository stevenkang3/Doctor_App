var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
$routeProvider.when('/', {
  templateUrl: 'partials/login.html',
  controller:'AppsController',
  controllerAs: 'appCtrl',
  redirectTo: '/doctor_apps',
}).when('/new_app', {
  templateUrl: 'partials/new_app.html',
  controller:'AppsController',
  controllerAs: 'newAppCtrl'
}).when('/doctor_apps', {
  templateUrl: 'partials/doctor_apps.html',
  controller:'AppsController',
  controllerAs: 'appCtrl'
})
.otherwise({
  redirectTo: '/new_app',
  // controller: 'AppsController',
  // controllerAs: 'appCtrl'
});
});

function validVar(var1){
if(var1 === undefined || var1 === null ) {
  return false;
}
return true;
}
