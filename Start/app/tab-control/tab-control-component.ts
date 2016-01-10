import {Component, Input, ContentChildren, QueryList} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Tab} from '../tab-control/tab-component';

@Component({
	selector: 'tab-control',
	templateUrl: '/app/tab-control/tab-control-view.html',
	directives: [CORE_DIRECTIVES, Tab],
	styles: []
})
export class TabControl {
	@ContentChildren(Tab) tabs: QueryList<Tab>;

	constructor() {
	}

	ngAfterContentInit() {
		if (this.tabs.length > 0) {
			this.tabs.first.active = true;
		}
	}

	activateTab(tab: Tab) {
		this.tabs.toArray().forEach((t) => {
			t.active = false;
		});

		tab.active = true;
	}
}