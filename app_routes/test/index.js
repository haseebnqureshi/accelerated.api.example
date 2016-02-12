module.exports = function(express, app, models) {

	app.get('test', function(req, res) {
		return res.status(200).send('Showing how we can insert a route...');
	});

	return app;
};