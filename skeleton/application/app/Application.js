








// TODO Нужно сделать возможность добавлять плагины в приложение
// чтобы все классы по одному типу объектов (например Конструкция или Балка рамы) объединять в один плагин






Ext.define("Zevs.Application", {
	
	extend: "Ext.app.Application",
	
	requires: [ 
		"Zevs.override.dd.DragTracker", 
		"Zevs.override.window.Toast",
		"Zevs.lib.project.Project",
		"Zevs.lib.project.item.Product",
		"Zevs.lib.project.item.FrameBeam"
	],
	
	name: "Zevs",
	
	config: {
		title: "Зевс — Построитель окон",
		project: null
	},
	
	autoCreateViewport: "Zevs.view.main.Main", 
	
	controllers: ["Root", "command.product.Insert", "command.framebeam.Insert", "command.productjoint.Insert"],
	
	init: function() {
		console.log("Ext.FocusManager.enabled =", Ext.FocusManager.enabled);
		this.initPageTitle();
		this.initProject();
	},
	
	initPageTitle: function() {
		var title = "<title>" + this.getTitle() + "</title>";
		Ext.dom.Helper.append(Ext.getDoc().down("head"), title);
	},
	
	initProject: function() {
		//Zevs.Project.setConstruction(Zevs.Project.createConstruction());
		this.setProject(Zevs.Project);
	},
	
	launch: function() {
		
	},
	
	getCommandController: function(name) {
		var controller = null;
		
		var classNamePrefix = name.split("/");
		var last = classNamePrefix[classNamePrefix.length - 1];
		last = last[0].toUpperCase() + last.substr(1);
		classNamePrefix[classNamePrefix.length - 1] = last;
		
		try {
			controller = this.getController("command." + classNamePrefix.join("."));
		} catch (error) {
			throw new Error("Ошибка загрузки контроллера команды '" + name + "'. " + error.message);
		}
		
		return controller;
	}
	
});