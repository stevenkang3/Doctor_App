var users = [];
var messages = [];

var is_user = function(user) {
  var users_count = users.length;
  for(var i = 0; i < users_count; i++)
  {
    if(user == users[i]){
      return true;
    }
  }
  return false;
}
module.exports = function(io){

  io.sockets.on('connection', function(socket){
    socket.on('page_load', function(data){
      if(is_user(data.user) === true){
        socket.emit('existing_user', {error: "This user already exists"})
      }
      else {
        users.push(data.user);
        socket.emit('load_users', {current_user: data.user})

      }
  })
  })
}
