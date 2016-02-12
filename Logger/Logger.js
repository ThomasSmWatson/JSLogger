//TODO: Use the singleton pattern to single out the instance
//High eprformance enhancement and security
var _StateController;
var shouldPersist; 

function Logger(){
	var StateController = require('./StateController.js');
	_StateController = new StateController();
}
function Logger(stateController){
	var StateController = require('./StateController.js');
	_StateController = stateController;
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
