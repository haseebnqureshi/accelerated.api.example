module.exports = function(express, app, models) {

	app.get('/users', function(req, res) {
		var user = models.users.getUser();
		return res.status(200).send(user);
	});

	return app;

};