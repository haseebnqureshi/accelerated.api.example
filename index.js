
var api = require('accelerated.api')();

api.useModels(['accUsers', 'accEmails', 'test']);

api.useMiddlewares(['accBodyParser', 'accLogin', 'test']);

api.useRoutes(['accLogin', 'test']);

api.run();
