System.register(['angular2/core', '../app/shape/rectangle-component', '../app/data-grid/data-grid-component', '../app/data-grid/grid-elements/ColumnDefinition', '../app/tab-control/tab-control-component', '../app/tab-control/tab-component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, rectangle_component_1, data_grid_component_1, ColumnDefinition_1, tab_control_component_1, tab_component_1;
    var TestComp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rectangle_component_1_1) {
                rectangle_component_1 = rectangle_component_1_1;
            },
            function (data_grid_component_1_1) {
                data_grid_component_1 = data_grid_component_1_1;
            },
            function (ColumnDefinition_1_1) {
                ColumnDefinition_1 = ColumnDefinition_1_1;
            },
            function (tab_control_component_1_1) {
                tab_control_component_1 = tab_control_component_1_1;
            },
            function (tab_component_1_1) {
                tab_component_1 = tab_component_1_1;
            }],
        execute: function() {
            TestComp = (function () {
                function TestComp() {
                    this.rectangleX = 25;
                    this.myItems = [
                        'Something 1',
                        'Something 2',
                        'Something 3'
                    ];
                    this.myObjects = [
                        { ab: 'asad', bc: 'qweqwe', cc: 10 },
                        { ab: 'bbbaw', bc: 'zdddw', cc: -5 },
                        { ab: 'qwee', bc: 'dwfggt', cc: 24 },
                        { ab: 'zzdd', bc: 'jjuiuk', cc: -2 },
                        { ab: 'asad', bc: 'qweqwe', cc: 10 },
                        { ab: 'bbbaw', bc: 'zdddw', cc: -5 },
                        { ab: 'qwee', bc: 'dwfggt', cc: 24 },
                        { ab: 'zzdd', bc: 'jjuiuk', cc: -2 },
                        { ab: 'asad', bc: 'qweqwe', cc: 10 },
                        { ab: 'bbbaw', bc: 'zdddw', cc: -5 },
                        { ab: 'qwee', bc: 'dwfggt', cc: 24 },
                        { ab: 'zzdd', bc: 'jjuiuk', cc: -2 },
                        { ab: 'asad', bc: 'qweqwe', cc: 10 },
                        { ab: 'bbbaw', bc: 'zdddw', cc: -5 },
                        { ab: 'qwee', bc: 'dwfggt', cc: 24 },
                        { ab: 'zzdd', bc: 'jjuiuk', cc: -2 }
                    ];
                    var def = new ColumnDefinition_1.ColumnDefinition('BC', 'bc', true);
                    def.formatter = function (propertyValue) { return propertyValue.toString().toUpperCase(); };
                    var definition = new ColumnDefinition_1.ColumnDefinition('CC', 'cc', true);
                    definition.addApplyClassCallback('testclass', function (p, i) { return parseInt(p) > 0; });
                    definition.addApplyClassCallback('classtest', function (p, i) { return parseInt(p) < 0; });
                    this.columnDefinitions = [
                        new ColumnDefinition_1.ColumnDefinition('AB', 'ab', true),
                        def,
                        definition
                    ];
                }
                TestComp.prototype.testAdd = function () {
                    console.log('In test add');
                    this.myObjects.push({ ab: 'test', bc: 'test2' });
                };
                TestComp.prototype.changeSize = function () {
                    console.log('change size');
                    this.rectangleX += 10;
                };
                TestComp = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: '/app/test-view.html',
                        directives: [rectangle_component_1.Rectangle, data_grid_component_1.DataGrid, tab_control_component_1.TabControl, tab_component_1.Tab]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TestComp);
                return TestComp;
            })();
            exports_1("TestComp", TestComp);
        }
    }
});
//# sourceMappingURL=testcomp.js.map