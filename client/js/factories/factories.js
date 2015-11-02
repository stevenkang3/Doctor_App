app.factory('AppsFactory', function($http){
  var factory = {};
  factory.user = {};

  factory.setUser = function(user){
    this.user = user;
  },
  factory.getUser = function(callback){
    callback(this.user);
  },
  factory.getApps = function(callback) {
    $http.get('/apps').success(function(response){
      callback(response);
    })
  }

  factory.addApp = function(newApp, callback) {
    console.log('fac:', newApp);
    $http.post('/apps', newApp).success(function(response){
      console.log('factory',response);
      callback(response.error);
    })
  }

    factory.destroyApp = function(appointment, callback){
    $http.delete('/apps/'+ appointment._id).success(function(response){
      callback(response);
    })
  }

  return factory;
});
