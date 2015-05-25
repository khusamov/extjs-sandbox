
Ext.Loader.setPath("Ext", "../../ext-5.1.0/src");
Ext.Loader.setPath("Ext.draw", "../../ext-5.1.0/packages/sencha-charts/src/draw");
Ext.Loader.setPath("Khusamov.svg", "../../src");

Ext.require("Khusamov.svg.Svg");
Ext.require("Khusamov.svg.element.Line");

Ext.onReady(function() {
	
	// Создаем SVG холст

	var svg = Ext.create("Khusamov.svg.Svg", {
		
		renderTo: Ext.getBody(),
		
		width: "100%",
		height: "100%",
		
		style: {
			overflow: "hidden",
			position: "absolute",
			left: "0px",
			top: "0px"
		}
	
	});
	
	// Создаем линию

	var line = svg.line(100, 100, 320, 170);
	
	line.setStyle({
		stroke: "green",
		strokeWidth: 1
	});
	
	// Добавляем линию на холст
	
	svg.add(line);

});


