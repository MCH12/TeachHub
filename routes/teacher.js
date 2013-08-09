var nodemailer = require('nodemailer');

var smtpTransport = nodemailer.createTransport("SMTP", {
	service: "Gmail",
	auth: {
		user: "nicangeli@gmail.com",
		pass: "h7x22UquBD1@&^ara0S$"
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
			console.log('Message sent: ' + response.Message)
		}
	});

	//smtpTransport.close();
}