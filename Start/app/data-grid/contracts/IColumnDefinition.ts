export interface IColumnDefinition {
	displayName: string;
	propertyName: string;
	visible: boolean;
	formatValue(propertyValue: any);
	applyClasses(propertyValue: any, item: any): {};
	addApplyClassCallback(className: string, callback: { (propertyValue: any, item: any): boolean });
}