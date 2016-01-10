import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
	selector: 'tab',
	templateUrl: '/app/tab-control/tab-view.html',
	directives: [CORE_DIRECTIVES],
	styles: [],
})
export class Tab {
	@Input('heading') heading: string;
	private _active: boolean;

	constructor() {
		this.active = false;
	}

	public get active(): boolean {
		return this._active;
	}

	public set active(value: boolean) {
		this._active = value;
	}
}