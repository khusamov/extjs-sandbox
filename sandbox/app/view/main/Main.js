
/* global Ext */

Ext.define("Sandbox.view.main.Main", {
	
	extend: "Ext.tab.Panel",
	
	xtype: "app-main",
	
	requires: [
		"Sandbox.view.main.MainController",
		"Sandbox.view.main.MainModel"
	],
	
	controller: "main",
	viewModel: "main",
	
	ui: "navigation",
	
	items: []

});