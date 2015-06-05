
Ext.define("Lesson2.view.user.UserDialog", {
	
	extend: "Ext.window.Window",
	
	xtype: "userdialog",
	
	requires: ["Lesson2.view.user.UserForm"],
	
	layout: "fit",
	
	bind: "{title}",
	
	width: 300,
	
	modal: true,
	
	items: [{
		xtype: "userform"
	}],
	
	buttons: [{
		text: "Ок",
		handler: "onDialogSave"
	}, {
		text: "Отмена",
		handler: "onDialogCancel"
	}]
	
});