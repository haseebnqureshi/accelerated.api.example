
## accelerated.api.example
Example app for npm accelerated.api.

### Quick Overview
You want to check out these areas, and understand how this is structured. Everything's been organized, while still clearly exposing the Express module and the Express app instance, allowing for full transparency and understanding.

### env.json
In order to quickly launch projects onto various machines, and for complete transparency when spinning your code onto any machine, accelerated.api loads all your environment variables from ```env.json```.

In ```env.json```, you have default environment settings, but then you have environment overrides. With environment overrides, you can have one specific environment use all of the default settings, _but with a different base app URL, or a different port or database connection string._

Even better, you can still choose to not include any key environment variables and simply ```EXPORT``` variables in bash script, providing better security for production-ready apps, since everything gets loaded into node's ```process.env``` object.

### Middlewares
In your ```app_middlewares``` directory, we have different middleware modules. Each middleware is defined as a CommonJS module that has its own folder, and then ```index.js```. Refer to the ```test``` middleware to see how the DI (direct injection) works with the CommonJS module design pattern.

### Routes
In your ```app_routes``` directory, we have different route modules. Each route is defined as a CommonJS module that has its own folder, and then ```index.js```. Refer to the ```test``` route to see how the DI (direct injection) works with the CommonJS module design pattern.

### Models
In your ```app_models``` directory, we have different model modules. Each model is defined as a CommonJS module that has its own folder, and then ```index.js```. Refer to the ```test``` model to see how the DI (direct injection) works with the CommonJS module design pattern.

Accelerated.api beautifully handles any model sub-dependencies by referencing a getter to all the models strapped. In other words, whenever a method is called on any model, accelerated.api's pattern then references the _then current_ list of models, and pulls the appropriate dependency. In other words, don't worry about the sub-dependencies in your model definitions. Just use the ```models``` variable that's injected into your model CommonJS module, and you'll be good to go.

### Using Middlewares, Routes, & Models
In order to register your middleware, route, or model, simply call any of the following methods as such.

```
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

Note, your modules will get called in the order that they are registered. This is particularly important in waterfalling your middlewares and routes.
```

### Starting Your Server
Call ```api.run()``` in your node script, and viola! Accelerated.api starts your Express app server, given your ```env.json``` Express variables. You can even specify a callback in ```api.run()``` that gets called when the server successfully starts, in case you have extra logic to implement.

