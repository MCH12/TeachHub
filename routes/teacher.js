var nodemailer = require('nodemailer'),
	Teacher = require('../models/teacher');

var smtpTransport = nodemailer.createTransport("SMTP", {
	service: "Gmail",
	auth: {
		user: "teachhubsignup@gmail.com",
		pass: "teachhub1"
	}
});



/*
 * GET users listing.
 */

exports.signup = function(req, res){
  res.render('teacher_signup')
};


exports.signedup = function(req, res) {
	console.log(req.body);
	var mailOptions = {
		from: "Teach Hub <nicangeli@gmail.com>",
		to: "nicangeli@gmail.com",
		subject: "test",
		text: JSON.stringify(req.body),
		html: JSON.stringify(req.body)
	};

	smtpTransport.sendMail(mailOptions, function(error, response) {
		if(error) {
			console.log(error);
		} else {
			console.log('I am sending emails')
			var private_options = {
				from: "Teach Hub <teachhubsignup@gmail.com>",
				to: req.body.email,
				subject: "Thanks for Signing Up!",
				text: "Thanks for signing up to Teach Hub. We'll be in contact soon!",
				html: "<b>Thanks for signing up to Teach Hub. We'll be in contact soon!</b>"
			};
			smtpTransport.sendMail(private_options, function(error, response) {
				if(error) {
					throw error;
					console.log('error sending second email');
				} else {
					var myTeacher = new Teacher();
					myTeacher.save(req.body);
					console.log('Message sent:');
					res.redirect('/thanks');
				}	
			})

		}
	});
	//smtpTransport.close();
}

exports.search = function(req, res){
	//var t = new Teacher();
	//t.search('', '', 'Arabic', function(results) {
		//res.render('teacher_search', {});
	//});
	res.render('teacher_search');
};

exports.results = function(req, res) {
	var t = new Teacher();
	t.search('', '', '', function(results) {
		res.render('results', {results: results});
	})
};

exports.thanks = function(req, res) {
	res.render('thanks');
};