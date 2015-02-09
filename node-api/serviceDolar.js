

var getDolarPrice = function(callback) {
    var http = require('http'); 

    return http.get({
        host: 'query.yahooapis.com',
        path: '/v1/public/yql?q=select%20%2a%20from%20yahoo.finance.xchange%20where%20pair%20in%20%28%22USDBRL%22%29&format=json&env=store://datatables.org/alltableswithkeys'
    
    }, function(response) {
        
        var body = '';
        response.on('data', function(d) {
            body += d;
        });

        response.on('end', function() {
            callback(JSON.parse(body).query.results.rate.Ask);
        });
    });

};

module.exports.getDolarPrice = getDolarPrice;