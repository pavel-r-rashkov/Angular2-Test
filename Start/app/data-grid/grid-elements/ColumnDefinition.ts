import {IColumnDefinition} from '../contracts/IColumnDefinition';
import {platform} from 'angular2/core';

export class ColumnDefinition implements IColumnDefinition {
	private _displayName: string;
	private _propertyName: string;
	private _visible: boolean;
	private _classesApplyCallbacks: { (propertyValue: any, item: any): boolean } [];
	private _classes: {};
	private _formatter: { (propertyValue: any): string };

	constructor(displayName: string, propertyName: string, visible: boolean) {
		this._displayName = displayName;
		this._propertyName = propertyName;
		this._visible = visible;
		this._classesApplyCallbacks = [];
		this._classes = {};
		this._formatter = null;
	}

	get displayName(): string {
		return this._displayName;
	}

	get propertyName(): string {
		return this._propertyName;
	}

	get visible(): boolean {
		return this._visible; 
	}

	set formatter(formatFunction: { (propertyName: any): string }) {
		this._formatter = formatFunction;
	}

	formatValue(propertyValue: any) {
		if (this._formatter == null) {
			return propertyValue;
		}
		return this._formatter(propertyValue);
	}

	applyClasses(propertyValue: any, item: any): {} {
		for (let className in this._classesApplyCallbacks) {
			this._classes[className] = this._classesApplyCallbacks[className](propertyValue, item);
		}

		return this._classes;
	}

	addApplyClassCallback(className: string, callback: { (propertyValue: any, item: any): boolean }) {
		this._classesApplyCallbacks[className] = callback;
	}
}