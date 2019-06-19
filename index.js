var fs=require('fs');


fs.readFile("package.json","utf8",function(err,data){
    if(err)
      console.log("unable to read file")
    else
      console.log(data);

})