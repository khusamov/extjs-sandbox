
Ext.define("Zevs.view.main.MainController", {
	
	extend: "Ext.app.ViewController",
	
	alias: "controller.main",
	
	init: function() {
		var me = this;
		me.getViewModel().set("applicationTitle", Zevs.app.getTitle());
		
		// TODO разобраться с этим делом -- нужно построить на listeners
		me.lookupReference("desktop").getController().on({
			scope: me,
			plugincancel: "onDesktopPluginCancel",
			pluginfinish: "onDesktopPluginFinish",
			pluginconflict: "onDesktopPluginConflict"
		});
		// / TODO
	},
	
	onDesktopPluginCancel: function(result, plugin) {
		var me = this;
		me.lookupReference("desktop").getSelectManager().unfreeze();
	},
	
	onDesktopPluginFinish: function(result, plugin) {
		var me = this;
		me.lookupReference("desktop").getSelectManager().unfreeze();
		console.log("MainController", "|", "Вызов команды '" + plugin.getPluginName() + "' с параметрами ", result);
		Zevs.app.getCommandController(plugin.getPluginName()).exec(result);
	},
	
	onDesktopPluginConflict: function(plugin, conflicted) {
		var message = new Ext.Template("Вы пытаетесь запустить команду '{conflicted}' не завершив команду '{plugin}'.");
		message = message.apply({
			plugin: plugin.getPluginName(),
			conflicted: conflicted.getPluginName()
		});
		Ext.toast(message, "Ошибка");
	},
	
	startDesktopPlugin: function(name) {
		var me = this;
		me.lookupReference("desktop").getSelectManager().freeze();
		me.lookupReference("desktop").getController().getPlugin(name).start();
	},
	
	onSetNeptuneTheme: function() {
		Ext.getBody().parent().down("head > link#ext-theme").set({
			href: "/ext-5.1.0/packages/ext-theme-neptune/build/resources/ext-theme-neptune-all.css"
		});
		Ext.toast("Подключена тема Нептун", "Смена темы");
	},
	
	onChangeSelection: function(selection) {
		var me = this;
		me.logSelection(selection);
	},
	
	logSelection: function(selection) {
		if (selection.getCount() == 1) {
			var item = selection.first().getProjectItem();
			console.log("Выбран элемент:", item.getId(), item.self.getName());
		} else {
			console.log("Ничего не выбрано.");
		}
	}
	
});