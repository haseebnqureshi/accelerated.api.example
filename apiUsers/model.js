module.exports = function(model, express, app, models) {

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

};