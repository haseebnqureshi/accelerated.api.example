
var api = require('accelerated.api');
var apiBodyParser = require('accelerated.api.body-parser');
var apiModule = require('accelerated.api.module');
var apiModel = require('accelerated.api.model');
var apiEmails = require('accelerated.api.emails');
var apiVersioning = require('accelerated.api.versioning');

api.useMiddlewares([ 
	[apiVersioning.key, apiVersioning.middleware],
	[apiBodyParser.key, apiBodyParser.middleware],
	[apiModule.key, apiModule.middleware]
]);

api.useModels([
	[apiModule.key, apiModule.model],
	[apiEmails.key, apiEmails.model],
	[apiModel.key, apiModel.model]
]);

api.useRoutes([
	[apiModule.key, apiModule.route],
	[apiModel.key, apiModel.route]
]);

api.run();
