
Ext.define("Lesson2.model.Base", {
	
	extend: "Ext.data.Model",
	
	fields: [{
		name: "id",
		type: "int"
	}],
	
	identifier: "sequential",
	
	schema: {
		namespace: "Lesson2.model",
		/*proxy: {
			type: "memory",
			reader: {
				type: "json"
			}
		}*/
	}

});