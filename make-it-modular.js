const myModule = require('./mymodule.js');
const directory = process.argv[2];
const extension = process.argv[3];

myModule(directory,extension,function(error,list){
	if(error){
		console.log(error);
	} else{
		list.forEach(function(item){
			console.log(item);
		})
	}
});