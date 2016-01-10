import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
	selector: 'ce-rectangle',
	templateUrl: '/app/shape/rectangle-view.html',
	directives: [CORE_DIRECTIVES],
	styles: []
})
export class Rectangle {
	@Input('items') items: any[];
	@Input('heading') heading: String;

	opened: boolean;

	constructor() {
		this.opened = false;
	}

	toggleList() {
		this.opened = !this.opened;
	}
}