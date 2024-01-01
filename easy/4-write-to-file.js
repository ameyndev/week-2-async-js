const fs = require('fs');

const lineToWrite = '-oonga bunga';

fs.appendFile('a.txt', lineToWrite, function(err) {
  if (!err) {
    console.log('Written to file successfully');
  }
});