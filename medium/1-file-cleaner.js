const fs = require('fs');

fs.readFile('b.txt', 'utf-8', function(err, data) {
  const cleanedContent = data.replace(/\s+/g, ' ');
  fs.writeFile('b.txt',cleanedContent, function(err) {
    if (!err) {
      console.log('file cleaned');
    }
  });
});