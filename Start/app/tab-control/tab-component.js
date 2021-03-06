System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var Tab;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            Tab = (function () {
                function Tab() {
                    this.active = false;
                }
                Object.defineProperty(Tab.prototype, "active", {
                    get: function () {
                        return this._active;
                    },
                    set: function (value) {
                        this._active = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input('heading'), 
                    __metadata('design:type', String)
                ], Tab.prototype, "heading", void 0);
                Tab = __decorate([
                    core_1.Component({
                        selector: 'tab',
                        templateUrl: '/app/tab-control/tab-view.html',
                        directives: [common_1.CORE_DIRECTIVES],
                        styles: [],
                    }), 
                    __metadata('design:paramtypes', [])
                ], Tab);
                return Tab;
            })();
            exports_1("Tab", Tab);
        }
    }
});
//# sourceMappingURL=tab-component.js.map