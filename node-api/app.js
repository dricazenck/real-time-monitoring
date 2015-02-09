var service = require('./serviceDolar.js'),
	dolar = {};


var callback = function(value) {
	dolar = value;
	console.log(new Date(), dolar);
};

setInterval(function(){ 
	service.getDolarPrice(callback); 
	
}, 10000);


