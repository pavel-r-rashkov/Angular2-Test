System.register([], function(exports_1) {
    var ColumnDefinition;
    return {
        setters:[],
        execute: function() {
            ColumnDefinition = (function () {
                function ColumnDefinition(displayName, propertyName, visible) {
                    this._displayName = displayName;
                    this._propertyName = propertyName;
                    this._visible = visible;
                    this._classesApplyCallbacks = [];
                    this._classes = {};
                    this._formatter = null;
                }
                Object.defineProperty(ColumnDefinition.prototype, "displayName", {
                    get: function () {
                        return this._displayName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ColumnDefinition.prototype, "propertyName", {
                    get: function () {
                        return this._propertyName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ColumnDefinition.prototype, "visible", {
                    get: function () {
                        return this._visible;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ColumnDefinition.prototype, "formatter", {
                    set: function (formatFunction) {
                        this._formatter = formatFunction;
                    },
                    enumerable: true,
                    configurable: true
                });
                ColumnDefinition.prototype.formatValue = function (propertyValue) {
                    if (this._formatter == null) {
                        return propertyValue;
                    }
                    return this._formatter(propertyValue);
                };
                ColumnDefinition.prototype.applyClasses = function (propertyValue, item) {
                    for (var className in this._classesApplyCallbacks) {
                        this._classes[className] = this._classesApplyCallbacks[className](propertyValue, item);
                    }
                    return this._classes;
                };
                ColumnDefinition.prototype.addApplyClassCallback = function (className, callback) {
                    this._classesApplyCallbacks[className] = callback;
                };
                return ColumnDefinition;
            })();
            exports_1("ColumnDefinition", ColumnDefinition);
        }
    }
});
//# sourceMappingURL=ColumnDefinition.js.map