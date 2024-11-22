const protocol = require('http');

protocol.get(process.argv[2], function(response){
	response.setEncoding('utf8');
	response.on('error',console.error);
	response.on('data',function(data){
		console.log(data);
	});
});

// protocol.get(process.argv[2],function(response){
// 	response.setEncoding('utf8')
// 	response.on('data',console.log)
// 	response.on('error',console.error)
// }).on('error',console.error)