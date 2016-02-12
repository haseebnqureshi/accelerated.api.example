
var api = require('accelerated.api')();

api.useModels(['test']);

api.useMiddlewares(['test']);

api.useRoutes(['test']);

api.run();
