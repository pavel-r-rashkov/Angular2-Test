System.register(['angular2/core', 'angular2/common', '../tab-control/tab-component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, tab_component_1;
    var TabControl;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (tab_component_1_1) {
                tab_component_1 = tab_component_1_1;
            }],
        execute: function() {
            TabControl = (function () {
                function TabControl() {
                }
                TabControl.prototype.ngAfterContentInit = function () {
                    if (this.tabs.length > 0) {
                        this.tabs.first.active = true;
                    }
                };
                TabControl.prototype.activateTab = function (tab) {
                    this.tabs.toArray().forEach(function (t) {
                        t.active = false;
                    });
                    tab.active = true;
                };
                __decorate([
                    core_1.ContentChildren(tab_component_1.Tab), 
                    __metadata('design:type', core_1.QueryList)
                ], TabControl.prototype, "tabs", void 0);
                TabControl = __decorate([
                    core_1.Component({
                        selector: 'tab-control',
                        templateUrl: '/app/tab-control/tab-control-view.html',
                        directives: [common_1.CORE_DIRECTIVES, tab_component_1.Tab],
                        styles: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], TabControl);
                return TabControl;
            })();
            exports_1("TabControl", TabControl);
        }
    }
});
//# sourceMappingURL=tab-control-component.js.map