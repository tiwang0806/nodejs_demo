function route(pathname, handle, response){
	console.log("about to route request, path name: " + pathname);
	if (typeof handle[pathname] === 'function') {
		handle[pathname](response);
	}
	else {
		console.log("no handler for" + pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 not found");
		response.end();
	}
}

exports.route = route;
