var http = require("http");

http.createServer(function(req, res) {
  var url = req.url;

  res.writeHead(200, {"Content-type": "text/html"});

  switch (url) {
    case '/view':
      res.write('/view route');
      break;
    case '/list':
      res.write('/list route');
      break;
    default:
      res.write('not found');
  }
  
  // res.write("Hello World");
  res.end();

}).listen(8888, function() {
  console.log('Node server running at 8888');
});
