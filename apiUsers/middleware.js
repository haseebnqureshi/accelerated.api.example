module.exports = function(express, app, models) {

	app.use('*', function(req, res, next) {
		console.log('Using module middleware ...');
		next();
	});

	return app;

};