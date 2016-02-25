
var api = require('accelerated.api');
var apiModule = require('accelerated.api.module');
var apiEmails = require('accelerated.api.emails');
var apiVersioning = require('accelerated.api.versioning');

api.useMiddlewares([ 
	[apiVersioning.key, apiVersioning.middleware],
	[apiModule.key, apiModule.middleware],
	'test'
]);

api.useModels([
	'test',
	[apiModule.key, apiModule.model],
	[apiEmails.key, apiEmails.model]
]);

api.useRoutes([
	'test',
	[apiModule.key, apiModule.route]
]);

api.run();

api.models.test.try();
