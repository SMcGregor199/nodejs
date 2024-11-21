const fileSystem = require('fs');
const path = require('path');
const directory = process.argv[2];

fileSystem.readdir(directory,function(error,list){
	if(error){
		console.log(error)
	} else {

		var filteredArray = list.filter(function(fileName){
			return path.extname(fileName) == ".md";
		});
		filteredArray.forEach(function(fileName){
			console.log(`${fileName}`);
		});
	}
});