import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {IColumnDefinition} from '../data-grid/contracts/IColumnDefinition';

@Component({
	selector: 'data-grid',
	templateUrl: '/app/data-grid/data-grid-view.html',
	directives: [CORE_DIRECTIVES],
	styles: []
})
export class DataGrid {
	@Input('items') items: Array<any>;
	@Input('column-definitions') columnDefinitions: IColumnDefinition[];

	private _inOrder: boolean;
	searchCriterias: Array<string>;

	constructor() {
		this._inOrder = false;
		this.searchCriterias = [];
	}

	order(propertyName: string) {
		let ordered = this._inOrder;
		this._inOrder = !this._inOrder;

		this.items.sort((a, b) => { 
			if (a[propertyName] === b[propertyName]) {
				return 0;
			} else if (a[propertyName] > b[propertyName]) {
				return ordered ? -1 : 1;
			} else {
				return ordered ? 1 : -1;
			}
		});
	}

	filter(item) {
		for (let propertyName in this.searchCriterias) {
			if (item[propertyName].toString().indexOf(this.searchCriterias[propertyName]) < 0) {
				return true;
			}
		}
		return false;
	}

	clearFilters() {
		for (let propertyName in this.searchCriterias) {
			this.searchCriterias[propertyName] = '';
		}
	}



	test() {
		console.log(this.searchCriterias);
	}
}