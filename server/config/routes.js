var users = require('../controllers/users.js');

module.exports = function(app) {
//Appointment Controller
app.get('/apps', function(request, response) { users.index(request, response) }) /* Index */
app.post('/apps', function(request, response) { users.create(request, response);})	 /* Create */
app.delete('/apps/:id', function(request, response) {users.destroy(request, response);})

}
