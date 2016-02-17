var Logger = require('./Logger/Logger.js');
var _Logger = new Logger();



_Logger.on('cheese').log("Hoola!!");
//of the logger is in debug, make sure to check the performance

_Logger.on('Debug').perform(function(){
	console.log("fps - 3000");
	if(true){
		console.log('I\'m alive!');
	}
});

