var http = require("http");
var url = require("url");

function start(route) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("request received" + pathname);
		
		route(pathname);

		response.writeHead(200, {"Content-Type":"text/plain"});
		response.write("hello world");
		response.end();
	}
	var server = http.createServer(onRequest);
	server.listen(8888);

	console.log("server started");
}

exports.start =  start;
