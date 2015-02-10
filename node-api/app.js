var service = require('./serviceDolar.js'),
	SDC = require('statsd-client'),
    sdc = new SDC({host: 'localhost', port: 8125, debug: true}),
	dolar = {},
	timer;

var callback = function(value) {
	dolar = value;
	timer = new Date();
	
	sdc.gauge('dolar.gauge', dolar);
	sdc.timing('dolar.request.time', timer);
};

setInterval(function() { 
	timeStart = new Date();
	service.getDolarPrice(callback); 

}, 10000);


