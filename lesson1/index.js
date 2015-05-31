
/*

	Задача:

	В процессе работы над subj захотелось в окне Frame view выделять то, что выделено во Frame tree. 
	Ну типа как в фотошопе, такая муравьиная дорожка вокруг выделенного объекта. 
	В моем случае это будет всегда прямоугольник, но я не знаю как даже подступиться к этой задаче. 
	Не подскажете направление поисков и пример, если возможно? 
	Графикой в Ext не занимался вовсе, даже не заглядывал.

*/

/*

	Решение будет следующим. Такую рамку можно будет ставить на любой компонент (потомок класса Ext.Component).
	Создадим функцию, которая на входе будет принимать компонент и ставить на нее рамку.
	На выходе будет объект, при помощи которого можно рамку удалить.

*/

/*

	Недостатки решения:
	1) Размер элемента компонента component.getEl() увы почему-то на 2 пиксела больше, чем он в реальности.
	Поэтому наша рамка больше получилась.
	2) Внутри div, который является рамкой, находится мусорный элемент: <div length="0"></div>
	3) Ext JS нашей рамки присвоил id="ext-element-2". Это в общем неплохо, но мы не запрашивали!
	
*/

/**
 * Функция добавления рамки вокруг любого компонента.
 * В теле body появляется div, который и является рамкой.
 * @param {Ext.Component} component
 * @return Ext.dom.Element
 */
function createComponentSelection(component) {
	var div = Ext.dom.Helper.createDom("<div/>");
	div = Ext.dom.Helper.append(Ext.getBody(), div);
	div = Ext.create("Ext.dom.Element", div);
	div.setStyle({
		border: "1px dashed black",
		position: "absolute",
		zIndex: 99999
	});
	var el = component.getEl();
	div.setX(el.getX());
	div.setY(el.getY());
	div.setWidth(el.getWidth());
	div.setHeight(el.getHeight());
	return div;
}

Ext.onReady(function() {
	
	// В качестве испытуемого компонента возьмем кнопку.
	
	var button = Ext.create('Ext.Button', {
		text: 'Click me',
		renderTo: Ext.getBody(),
		handler: function() {
			alert('You clicked the button!');
		}
	});
	
	var selectDiv = createComponentSelection(button);
	
});