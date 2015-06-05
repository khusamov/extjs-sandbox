
Ext.define("Lesson2.view.user.UsergridController", {
	
	extend: "Ext.app.ViewController",
	
	alias: "controller.usergrid",
	
	init: function() {
		var me = this;
		Lesson2.model.User.identifier.setSeed(me.getStore("users").max("id") + 1);
	},
	
	createDialog: function(record) {
		var me = this;
		return Ext.create({
			xtype: "userdialog",
			reference: "userdialog",
			viewModel: {
				parent: me.getViewModel(),
				data: {
					title: me.createDialogTitle(record),
					user: record ? record.copy() : Ext.create("Lesson2.model.User")
				},
				// http://javascript.ru/forum/extjs/56199-rabota-s-primerom-mvvm.html
				/*links: {
					user: record || {
						type: "User",
						create: true
					}
				}*/
			}
		});
	},
	
	createDialogTitle: function(record) {
		// TODO шаблон заголовка окна переместить в Lesson2.view.user.UserDialog и сделать зависимым от record.phantom
		var titleTemplate = new Ext.Template(record ? "Пользователь «{name}»" : "Новый пользователь");
		var title = titleTemplate.apply({
			name: record ? record.get("name") : null
		});
		return title;
	},
	
	getSelectedRecord: function() {
		return this.getView().getSelection()[0];
	},
	
	onInsert: function() {
		var me = this;
		var dialog = me.createDialog();
		//me.getView().add(dialog);
		dialog.show();
	},
	
	onUpdate: function() {
		var me = this;
		var record = me.getSelectedRecord();
		var dialog = me.createDialog(record);
		//me.getView().add(dialog);
		dialog.show();
	},
	
	onDelete: function() {
		Ext.Msg.confirm("Удаление", "Удалить пользователя?", "onConfirmDelete", this);
	},
	
	onConfirmDelete: function(confirm) {
		if (confirm == "yes") this.getSelectedRecord().drop();
	},
	
	onRefresh: function() {
		this.getStore("users").load();
	},
	
	onDialogSave: function() {
		var me = this;
		var dialog = me.lookupReference("userdialog");
		var dialogViewModel = dialog.getViewModel();
		var record = dialogViewModel.get("user");
		var users = me.getStore("users");
		if (record.phantom) {
			users.add(record);
		} else {
			users.getById(record.getId()).set(record.getData());
		}
		dialog.close();
	},
	
	onDialogCancel: function() {
		var me = this;
		me.lookupReference("userdialog").close();
	}
	
});