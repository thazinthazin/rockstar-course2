var fs = require("fs");

fs.readFile('data.txt', 'utf8', function(err, data) {
  setTimeout(function() {
    console.log(data);
  }, 5000);
});
console.log('Another Process');
