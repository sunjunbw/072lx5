const fs=require('fs');

fs.readFile("b.txt",function(err,data){
	console.log(data.toString());
})
console.log('hello');
