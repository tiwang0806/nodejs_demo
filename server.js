var http = require("http");
var url = require("url");
var requestHandlers = require("./requestHandlers");

function start(route, hanlders) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("request received" + pathname);
		
		var handle = {};
		handle["/"] = requestHandlers.start;
		handle["/start"] = requestHandlers.start;
		handle["/upload"] = requestHandlers.upload;
		
		route(pathname, handle, response);

	}
	var server = http.createServer(onRequest);
	server.listen(8888);

	console.log("server started");
}

exports.start =  start;
