module.exports = function(express, app, models) {

	app.use('*', function(req, res, next) {
		console.log('Showing how we can insert middleware...');
		next();
	});

	return app;
};