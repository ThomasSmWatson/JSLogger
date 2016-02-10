var ExceptionStateController = require('./../ExStack/ExceptionStateController.js');
var jasmine = require('jasmine');
var sut;

describe('should return true when the state can be found inside the state',function(){
	beforeEach(function(){
		sut = new ExceptionStateController();
	});
	it('Should return true',function(){
		 //ARRANGE
		 sut.setStates(["foo","bar"]);
		 sut.setCurrentState("foo");

		 // ACT & ASSERT
		expect(sut.isPersisted()).toBe(false)
		expect(sut.checkForValidState()).toBe(true);	
		expect(sut.isPersisted()).toBe(true);
	});
	it('Should return false when the current state cannot be found in the states',function(){
		//ARRANGE
		sut.setStates(["foo","baz"]);
		sut.setCurrentState("bar");
		// ACT & ASSERT
		expect(sut.isPersisted()).toBe(false)
		expect(sut.checkForValidState()).toBe(false);	
		expect(sut.isPersisted()).toBe(false);
	});
});
