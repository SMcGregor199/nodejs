const fs = require('fs');

var path = process.argv[2];

fs.readFile(path,'utf8', function(err,data) {
	if(err){
		return console.log(err);
	}
	var newLinesArray = data.split('\n');

	console.log(newLinesArray.length-1);
});
