
Ext.define("Lesson2.view.user.UserForm", {
	
	extend: "Ext.form.Panel",
	
	xtype: "userform",
	
	bodyPadding: 5,
	
	layout: {
		type: "anchor"
	},
	
	defaults: {
		anchor: "100%",
		xtype: "textfield"
	},
	
	items: [{
		fieldLabel: "Пользователь",
		bind: "{user.name}"
	}, {
		fieldLabel: "Логин",
		bind: "{user.login}"
	}]
	
});