module.exports = (function() {

	var settings = {
		key: 'users',
		name: 'Users Module',
		extendModel: require('./model.js'),
		appendMiddleware: require('./middleware.js'),
		appendRoute: require('./route.js')
	};

	var module = new require('accelerated.api.module')(settings);

	return module;

})();