var Logger = require('./../Logger/Logger.js');
var StateController = require('./../Logger/StateController.js');
var jasmine  = require('jasmine');

describe('Test the Logger functionality is working correctly',function(){
	it('Will only pick the correct loggers to display',function(){
		var sc = new StateController();
		sc.setStates(["FOO","BAR"]);
		var logger = new Logger(sc);
		logger.on('FOO').log('foo');
		logger.on('BAR').log('bar');
		logger.on('FOOBAR').log('BAZ');
		logger.on('FOO').perform(function(){
		 	expect(true).toBe(true);
		 });
		 logger.on('BAR').perform(function(){
			expect(true).toBe(true);
		 });
		logger.on('FOOBAR').perform(function(){
			expect(true).toBe(false);
		});
	});
});
