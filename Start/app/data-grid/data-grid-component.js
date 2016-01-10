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
    var DataGrid;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            DataGrid = (function () {
                function DataGrid() {
                    this._inOrder = false;
                    this.searchCriterias = [];
                }
                DataGrid.prototype.order = function (propertyName) {
                    var ordered = this._inOrder;
                    this._inOrder = !this._inOrder;
                    this.items.sort(function (a, b) {
                        if (a[propertyName] === b[propertyName]) {
                            return 0;
                        }
                        else if (a[propertyName] > b[propertyName]) {
                            return ordered ? -1 : 1;
                        }
                        else {
                            return ordered ? 1 : -1;
                        }
                    });
                };
                DataGrid.prototype.filter = function (item) {
                    for (var propertyName in this.searchCriterias) {
                        if (item[propertyName].toString().indexOf(this.searchCriterias[propertyName]) < 0) {
                            return true;
                        }
                    }
                    return false;
                };
                DataGrid.prototype.clearFilters = function () {
                    for (var propertyName in this.searchCriterias) {
                        this.searchCriterias[propertyName] = '';
                    }
                };
                DataGrid.prototype.test = function () {
                    console.log(this.searchCriterias);
                };
                __decorate([
                    core_1.Input('items'), 
                    __metadata('design:type', Array)
                ], DataGrid.prototype, "items", void 0);
                __decorate([
                    core_1.Input('column-definitions'), 
                    __metadata('design:type', Array)
                ], DataGrid.prototype, "columnDefinitions", void 0);
                DataGrid = __decorate([
                    core_1.Component({
                        selector: 'data-grid',
                        templateUrl: '/app/data-grid/data-grid-view.html',
                        directives: [common_1.CORE_DIRECTIVES],
                        styles: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], DataGrid);
                return DataGrid;
            })();
            exports_1("DataGrid", DataGrid);
        }
    }
});
//# sourceMappingURL=data-grid-component.js.map