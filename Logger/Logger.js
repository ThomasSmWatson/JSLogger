//TODO: Use the singleton pattern to single out the instance
//High eprformance enhancement and security
var _StateController;
var shouldPersist; 

function Logger(){
	function baseConstructor(){
		var StateController = require('./StateController.js');
		_StateController = new StateController();
	}
	function constructorWithStateController(){
		var StateController = require('./StateController.js');
		_StateController = stateController;
	}
	switch(arguments.length){
		case 0: 
		baseConstructor();
		break;
		case 1:
		constructorWithStateController(arguments[0]);
		break;
	}
}

function act(val){
	if(shouldPersist)
		val();
	return null;
}
Logger.prototype.perform = function(call){
	act(call);
}
Logger.prototype.log=function(val){
	if(shouldPersist)
		console.log(val);
}
Logger.prototype.on = function(value){
	shouldPersist = _StateController.checkForValidState(value);
	return this;
}


module.exports = Logger;
