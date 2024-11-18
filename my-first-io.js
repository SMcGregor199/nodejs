const fs = require('fs');
var path = fs.readFileSync(process.argv[2]);
var fileContent = path.toString();
function countNewLines(string){
	var newLinesArray = string.split('\n');

	console.log(newLinesArray.length - 1);
}

countNewLines(fileContent);