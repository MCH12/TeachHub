var client = require('twilio')('AC290d9a56b0ae27a9393a8e3b37e1df71', '45dab5b14cc90ad4e73a1975a0d93e4b');

module.exports = function( ) {
	this.makeCall = function() {
		client.makeCall({
			to: '+447432628820',
			from: '+441733514667',
			url: 'http://www.teachhub.co.uk/twilio.xml'
		}, function(err,responseData) {
			console.log(responseData);
		});
	}
}