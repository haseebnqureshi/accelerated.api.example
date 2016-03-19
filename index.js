
var api = require('accelerated.api');
var apiBodyParser = require('accelerated.api.body-parser').use();
var apiVersioning = require('accelerated.api.versioning').use();
var apiEmails = require('accelerated.api.emails').use();
var apiUsers = require('./apiUsers').use();
var apiItems = require('./apiItems').use();

api.useMiddlewares([ 
	[apiVersioning.key, apiVersioning.middleware],
	[apiBodyParser.key, apiBodyParser.middleware],
	[apiUsers.key, apiUsers.middleware],
	[apiItems.key, apiItems.middleware]
]);

api.useModels([
	[apiEmails.key, apiEmails.model],
	[apiUsers.key, apiUsers.model],
	[apiItems.key, apiItems.model]
]);

api.useRoutes([
	[apiUsers.key, apiUsers.route],
	[apiItems.key, apiItems.route]
]);

api.run();
