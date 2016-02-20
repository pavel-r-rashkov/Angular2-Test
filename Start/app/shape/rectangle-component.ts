import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
	selector: 'g[ce-rectangle]',
	templateUrl: '/app/shape/rectangle-view.html',
	directives: [CORE_DIRECTIVES],
	styles: []
})
export class Rectangle {
	// @Input('items') items: any[];
	// @Input('heading') heading: String;
	@Input('recX') recX: any;
	@Input('recY') recY: any;

	opened: boolean;
 
	constructor() {
		this.opened = false;
	}

	toggleList() {
		this.opened = !this.opened;
	}

	changeSize() {
		this.recX += 10;
	}
}