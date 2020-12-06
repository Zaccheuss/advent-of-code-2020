function FileReader () {}
 
FileReader.inputAsArray = function (path) {
  const fs = require('fs');
  const readline = require('readline');

  fs.readFile('../day-1/input.txt', 'utf8' , (err, data) => {
    const output = [];
    output.push(data);
    console.log(output);
    return output;
  })
};

FileReader.inputAsArray();
