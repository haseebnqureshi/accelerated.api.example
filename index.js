
var api = require('accelerated.api');
var example = require('accelerated.api.module');
var emails = require('accelerated.api.emails');

api.useMiddlewares([ 
	'test',
	[example.key, example.middleware]
]);

api.useModels([
	'test',
	[example.key, example.model],
	[emails.key, emails.model]
]);

api.useRoutes([
	'test',
	[example.key, example.route]
]);

api.run();

api.models.test.try();
