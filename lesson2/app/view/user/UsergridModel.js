
Ext.define("Lesson2.view.user.UsergridModel", {
	
	extend: "Ext.app.ViewModel",
	
	alias: "viewmodel.usergrid",
	
	stores: {
		users: {
			type: "array",
			model: "User",
			autoSync: true,
			
			// TODO не знаю как удалить отсюда прокси
			proxy: {
				type: "memory",
				reader: {
					type: "json"
				}
			},
			
			data: [{
				id: 1,
				name: "Иветта",
				login: "ivetta"
			}, {
				id: 2,
				name: "Лизетта",
				login: "lizetta"
			}, {
				id: 3,
				name: "Мюзетта",
				login: "muzetta"
			}, {
				id: 4,
				name: "Жанетта",
				login: "janetta"
			}, {
				id: 5,
				name: "Жоpжетта",
				login: "jorjetta"
			}, {
				id: 6,
				name: "Колетта",
				login: "koletta"
			}, {
				id: 7,
				name: "Полетта",
				login: "poletta"
			}, {
				id: 8,
				name: "Клоpетта",
				login: "kloretta"
			}, {
				id: 9,
				name: "Флоpетта",
				login: "floretta"
			}, {
				id: 10,
				name: "Маpиетта",
				login: "marietta"
			}]
		}
	}
	
});