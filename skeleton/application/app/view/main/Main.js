
Ext.define("Zevs.view.main.Main", {
	
	extend: "Ext.panel.Panel",
	
	requires: [
		"Zevs.view.main.MainModel", 
		"Zevs.view.main.MainController", 
		"Zevs.view.desktop.Desktop",
		"Zevs.view.propertygrid.Grid"
	],
	
	plugins: "viewport",
	
	controller: "main",
	
	viewModel: {
		type: "main"
	},
	
	tbar: [{
		xtype: "tbtext", 
		bind: {
			html: "{applicationTitle}"
		}
	}, {
		text: "Изделие",
		listeners: {
			click: "startDesktopPlugin",
			args: ["product/insert"]
		},
		/*menu: [{
			text: "Многоугольная рама",
			listeners: {
				click: "startDesktopPlugin",
				args: ["product/insert"]
			}
		}, {
			text: "Прямоугольная рама"
		}, {
			text: "Треугольная рама"
		}]*/
	}, {
		text: "Балка рамы",
		listeners: {
			click: "startDesktopPlugin",
			args: ["framebeam/insert"]
		}
	}, {
		text: "Соединитель",
		listeners: {
			click: "startDesktopPlugin",
			args: ["productjoint/insert"]
		}
	/*}, {
		text: "Импост"*/
	}, {
		text: "Нептун",
		handler: "onSetNeptuneTheme"
	}],
	
	layout: "border",
	border: false,
	
	items: [{
		reference: "desktop",
		xtype: "zevs-view-desktop",
		region: "center",
		border: false,
		listeners: {
			select: "onChangeSelection",
			unselect: "onChangeSelection"
		}
	}, {
		reference: "propertygrid",
		xtype: "zevs-view-propertygrid-grid",
		region: "east",
		split: true,
		width: 400,
		border: false
	}]
	
});


