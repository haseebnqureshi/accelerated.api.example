
var api = require('accelerated.api');
var apiBodyParser = new require('accelerated.api.body-parser')();
var apiVersioning = new require('accelerated.api.versioning')();
var apiEmails = new require('accelerated.api.emails')();
var apiModel = new require('accelerated.api.model')();
var apiUsers = new require('./apiUsers')();

api.useMiddlewares([ 
	[apiVersioning.key, apiVersioning.middleware],
	[apiBodyParser.key, apiBodyParser.middleware],
	[apiUsers.key, apiUsers.middleware]
]);

api.useModels([
	[apiEmails.key, apiEmails.model],
	[apiUsers.key, apiUsers.model],
	[apiModel.key, apiModel.model]
]);

api.useRoutes([
	[apiUsers.key, apiUsers.route],
	[apiModel.key, apiModel.route]
]);

api.run();
