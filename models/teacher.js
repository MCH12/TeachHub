var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TeacherSchema = new Schema({
	name: String, 
	postCode: String, 
	distance: String, 
	contactNumber: String, 
	email: String,
	primary: String, 
	secondary: String, 
	level: String
});

var Teacher = mongoose.model('Teacher', TeacherSchema);
mongoose.connect('mongodb://teachhub:teachhub1@ds037498.mongolab.com:37498/heroku_app17409453');

module.exports = function() {

	this.save = function(teacher_details) {
		var t = new Teacher();
		t.name = teacher_details.name;
		t.postCode = teacher_details.postCode;
		t.distance = teacher_details.distance;
		t.contactNumber = teacher_details.contactNumber;
		t.email = teacher_details.email;
		t.primary = teacher_details.primary;
		t.secondary = teacher_details.secondary;
		t.level = teacher_details.level;

		t.save(function(err) {
			if(err) {
				console.log(err);
			} else {
				console.log('Save model to DB');
			}
		})
	}, 

	this.search = function(level, distance, subject, callback) {
		Teacher.find({}, function(err, results) {
			if(err) {
				throw err;
			} else {
				callback(results);
			}
		})
	}

}