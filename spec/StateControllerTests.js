var StateController = require('./../Logger/StateController.js');
var jasmine = require('jasmine');
var sut;

describe('should return true when the state can be found inside the state',function(){
	beforeEach(function(){
		sut = new StateController();
	});
	it('Should return true',function(){
		 //ARRANGE
		 sut.setStates(["foo","bar"]);
		 

		 // ACT & ASSERT
		expect(sut.isPersisted()).toBe(false)
		expect(sut.checkForValidState("foo")).toBe(true);	
		expect(sut.isPersisted()).toBe(true);
	});
	it('Should return false when the current state cannot be found in the states',function(){
		//ARRANGE
		sut.setStates(["foo","baz"]);
		// ACT & ASSERT
		expect(sut.isPersisted()).toBe(false)
		expect(sut.checkForValidState("bar")).toBe(false);	
		expect(sut.isPersisted()).toBe(false);
	});
});
