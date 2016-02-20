import {Component} from 'angular2/core';
import {Rectangle} from '../app/shape/rectangle-component';
import {DataGrid} from '../app/data-grid/data-grid-component';
import {IColumnDefinition} from '../app/data-grid/contracts/IColumnDefinition';
import {ColumnDefinition} from '../app/data-grid/grid-elements/ColumnDefinition';
import {TabControl} from '../app/tab-control/tab-control-component';
import {Tab} from '../app/tab-control/tab-component';

@Component({
    selector: 'my-app',
    templateUrl: '/app/test-view.html',
    directives: [Rectangle, DataGrid, TabControl, Tab]
})
export class TestComp {
	myItems: any[];
	myObjects: any[];
	columnDefinitions: IColumnDefinition[];

	rectangleX: number;


	constructor() {
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

		let def = new ColumnDefinition('BC', 'bc', true);
		def.formatter = (propertyValue: any) => { return propertyValue.toString().toUpperCase(); };

		let definition = new ColumnDefinition('CC', 'cc', true);
		definition.addApplyClassCallback('testclass', (p, i) => { return parseInt(p) > 0 });
		definition.addApplyClassCallback('classtest', (p, i) => { return parseInt(p) < 0 });

		this.columnDefinitions = [
			new ColumnDefinition('AB', 'ab', true),
			def,
			definition
		];
	}

	testAdd() {
		console.log('In test add');
		this.myObjects.push({ ab: 'test', bc: 'test2' });
	}


	changeSize() {
		console.log('change size');
		this.rectangleX += 10;
	}

}

