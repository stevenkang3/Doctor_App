var User = mongoose.model('App');
// var Order = mongoose.model('Order');
// var Product = mongoose.model('Product');
var errors_array = [];
module.exports = (function() {
	return {
		index: function(request, response){
			User.find({}, function(err, records){
				response.json(records);
			})
		},


		create: function(request, response){
	    // if(request.body.date){
				var appt = User.findOne({$and: [{name:request.body.name}, {date:request.body.date}]}, function(err, records){
				console.log(appt.name);
					});

	      User.find({date: request.body.date}, function(err, records){
	        if (records.length >= 3) { return response.json({error:'No more appointments are allowed for this date'}); }
	        else{
	          var user = new User();
	          user.date = request.body.date;
	          user.time = request.body.time;
	          user.name = request.body.name;
	          user.complain = request.body.complain;
	          user.save(function(err){
	            if(err){
	              response.json({status:false, error: err});
	            }
	            else{ return response.json({error:'Appointment Added Succesfully'}); }
	        })
	      }
	    })
	    // 	}
	    // else { return response.json({error: 'Date required!'}); }
	  },



			destroy: function(request, response){
				console.log("Server / Ctrl / Users - Destroy")
				console.log(request.params.id);
				User.remove({_id:request.params.id}, function(err){
					if(err){ response.json(false); }
					else{ response.json(true); }
				})
			},


}
})();
