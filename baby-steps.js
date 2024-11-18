
console.log(

	process.argv.slice(2).reduce(
	
		(acc,curr)=> acc + parseInt(curr),0
	
	)

);

