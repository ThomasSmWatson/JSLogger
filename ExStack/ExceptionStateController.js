	
	var StateConfig = require('./StateConfig.json');
	var persisted = false;
	var states;
	var state;

	function ExceptionStateController(){
		StateConfig = require('./StateConfig.json');
		states = StateConfig.States;
		state = StateConfig.Current_State;
		persisted = false;
	}
	ExceptionStateController.prototype.isPersisted = function(){ 
		return persisted;
	}
	ExceptionStateController.prototype.setStates =  function(newStates){
		states = newStates;
	} 
	ExceptionStateController.prototype.setCurrentState =  function(newCurrentState){
		state = newCurrentState;
	}
	ExceptionStateController.prototype.checkForValidState = function(){
		if(persisted) return persisted;
		 for(var i=0; i<states.length;i++){
	 		console.log(states[i]);
		 	if(state == states[i]){
		 	persisted = true;
	 		return true;
	 		}
	 	}
		state = "INVALID_STATE (Check configuration)";
		return false;
	}


module.exports = ExceptionStateController;
