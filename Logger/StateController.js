	
	var StateConfig = require('./StateConfig.json');
	var persisted = false;
	var states;
	
	function StateController(){
		StateConfig = require('./StateConfig.json');
		states = StateConfig.States;
		persisted = false;
	}
	StateController.prototype.isPersisted = function(){ 
		return persisted;
	}
	StateController.prototype.setStates =  function(newStates){
		states = newStates;
	} 
	StateController.prototype.checkForValidState = function(state){
		 for(var i=0; i<states.length;i++){
		 	if(state == states[i]){
		 	persisted = true;
	 		return true;
	 		}
	 	}
		state = "LOGGER_INVALID_STATE: Logger has detected that a state has been entered: :-"+state+"-:";
		return false;
	}


module.exports = StateController;
