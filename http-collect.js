const protocol = require('http');

protocol.get(process.argv[2],function(response){
	response.on('error',function(error){
		console.log(error);
	});

	var data = '';
	
	response.on('data',function(chunk){
		data += chunk;
	});

	response.on('end',function(){
		console.log(data.length);
		console.log(data);
	})
}).on('error',function(error){
	console.log(error);
});