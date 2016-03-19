module.exports = (function() {

    var module = new require('accelerated.api.model');

    module.setSettings({
        key: 'items',
        name: 'Items Module'
    });

    return module;

})();