var mongoose = require('mongoose');
var validate = require('mongoose-validator');

var complaintValidator =[
  validate({
    validator: 'isLength',
    arguments: [10,250],
    message: 'Name should be between 10 and 250 characters'
  })
];
// var nameValidator =[
//   validate({
//     validator: 'isLength',
//     arguments: [3,50],
//     message: 'Name should be between 3 and 50 characters'
//   })
// ];

var App_Schema = new mongoose.Schema({
  name: { type: String},
  date: { type: Date, default: Date.now},
  time: String,
  complain : { type: String, required: true, validate:complaintValidator},
  created_at: { type: Date, default: Date.now },
});

mongoose.model('App', App_Schema);
// App_Schema.path('name').required(true, "Name is required");
