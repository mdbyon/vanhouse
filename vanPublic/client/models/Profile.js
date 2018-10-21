var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var profileSchema = new Schema({
  name: String,
  bio: {
      college: String, 
      age: Number, 
      jobTitle: String
    }
});
module.exports = mongoose.model('Profile', profileSchema);