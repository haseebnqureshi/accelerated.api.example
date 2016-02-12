module.exports = function(express, app, models) {

	var model = {
		test: function() {
			console.log('Showing how we can insert a model...');
		}
	};

	return model;
};