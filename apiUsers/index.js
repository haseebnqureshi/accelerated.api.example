module.exports = function() {

	/* you can require this or other modules using accelerated.api.module */

	var module = new require('accelerated.api.module')();

	/* set your module's key for reference by middlwares, models, and routes */

	module.setKey('users');

	/* set your module's name for logging output */

	module.setName('Users Module');

	/* you can choose to extend your module's model */

	module.extendModel(function(model, express, app, models) {

		/* modify model to include user create, retrieve, update, and delete methods */

		model.getUser = function() {
			return {
				id: 1,
				name: 'John Doe'
			}
		};

		model.postUser = function(args) {
			return {
				id: 1,
				name: 'John Doe'
			}
		};

		model.putUser = function(args) {
			return {
				id: 1,
				name: 'John Doe'
			}
		};
		model.deleteUser = function() {
			return {}
		};

		return model;

	});

	/* you can choose to extend your module's middleware */

	module.appendMiddleware(function(express, app, models) {

		/* modify app to include user authentication middleware */

		app.use('*', function(req, res, next) {
			console.log('Using module middleware ...');
			next();
		});

		return app;

	});

	/* you can choose to extend your module's routes */

	module.appendRoute(function(express, app, models) {
		
		/* modify app to include user CRUD routes */

		app.get('/users', function(req, res) {
			var user = models.users.getUser();
			return res.status(200).send(user);
		});

		return app;

	});

	return module;

};