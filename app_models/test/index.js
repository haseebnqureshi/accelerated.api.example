module.exports = function(express, app, models) {

	var model = {
		try: function() {
			console.log('Showing how we can display all models...');
			console.log("models", models);
		}
	};

	return model;
};