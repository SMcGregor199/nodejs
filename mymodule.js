
const fileSystem = require('fs');
const path = require('path');

module.exports = function listMdFiles(directoryName,fileNameExtension,callBackFunction){

	fileSystem.readdir(directoryName,function(error,list){
		if(error){
			callBackFunction(error);
		} else {
			var filteredArray = list.filter(function(fileName){
				return path.extname(fileName) == `.${fileNameExtension}`;
			});
			callBackFunction(null,filteredArray);
		}
	});
}

