
var api = require('accelerated.api');
var example = require('accelerated.api.module');

api.useMiddlewares([ 
	'test',
	[example.key, example.middleware]
]);

api.useModels([
	'test',
	[example.key, example.model]
]);

api.useRoutes([
	'test',
	[example.key, example.route]
]);

api.run();
