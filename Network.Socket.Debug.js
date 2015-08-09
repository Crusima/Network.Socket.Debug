(function(plugin) {
    'use strict';

    var Module = (function() {
        var _version   = '0.1.9';
        var _namespace = 'CTW2.Plugin.Socket.Debug';

        function handleEvent(e) {
            console.log('Socket: ' + e.type);

            console.log(e.detail);
        }

        function Debug() {
        }

        Debug.prototype.getVersion = function() {
            return _version;
        };

        Debug.prototype.getNamespace = function() {
            return _namespace;
        };

        Debug.prototype.run = function() {
            document.addEventListener('Heartbeat', handleEvent);
            document.addEventListener('ClickVillage', handleEvent);
            document.addEventListener('ShowVillageInfo', handleEvent);
            document.addEventListener('ShowPlayerInfo', handleEvent);
        };

        Debug.prototype.stop = function() {
            document.removeEventListener('Heartbeat', handleEvent);
            document.removeEventListener('ClickVillage', handleEvent);
            document.removeEventListener('ShowVillageInfo', handleEvent);
            document.removeEventListener('ShowPlayerInfo', handleEvent);
        };

        return Debug;
    }());

    var module = new Module();

    newPluginName = module.getNamespace();

    plugin.registerAndRun(module);
}(_mainPlugin));
