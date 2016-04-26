function route(pathname, handle){
	console.log("about to route request, path name: " + pathname);
	if (typeof handle[pathname] === 'function') {
		handle[pathname]();
	}
	else {
		console.log("no handler for" + pathname);
	}
}

exports.route = route;
