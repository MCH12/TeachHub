var nodemailer = require('nodemailer');

var smtpTransport = nodemailer.createTransport("SMTP", {
	service: "Gmail",
	auth: {
		user: "teachhubsignup@gmail.com",
		pass: "teachhub1"
	}
});


exports.index = function(req, res){
  res.render('index');
};

exports.about = function(req, res){
	res.render('about');
}

exports.contact = function(req, res){
	res.render('contact');
}

exports.search = function(req, res){
	res.render('teacher_search');
}

exports.thanksContact = function(req, res){
	res.render('thanksContact');
}
	
exports.sendMessage = function(req, res){
		console.log(req.body);
	var mailOptions = {
		from: "Teach Hub <teachhubsignup@gmail.com>",
		to: "teachhubsignup@gmail.com",
		subject: "Message from " + req.body.name + " " + req.body.email,
		text: req.body.messageText,
		html: req.body.messageText
	};
	smtpTransport.sendMail(mailOptions, function(error, response) {res.redirect('/thanksContact')});
}