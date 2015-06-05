
Ext.define("Lesson2.view.user.Usergrid", {
	
	extend: "Ext.grid.Panel",
	
	requires: [
		"Lesson2.view.user.UsergridController", 
		"Lesson2.view.user.UsergridModel",
		"Lesson2.view.user.UserDialog"
	],
	
	title: "Пользователи",
	
	plugins: "viewport",
	
	border: false,
	
	reference: "grid",
	
	bind: "{users}",
	
	controller: "usergrid",
	
	viewModel: {
		type: "usergrid"
	},
	
	columns: [{
		text: "Номер",
		dataIndex: "id",
		width: 100
	}, {
		text: "Пользователь",
		dataIndex: "name",
		flex: 1
	}, {
		text: "Логин",
		dataIndex: "login",
		flex: 1
	}],
	
	tbar: [{
		text: "Новый пользователь",
		handler: "onInsert"
	}, {
		text: "Редактировать",
		handler: "onUpdate",
		bind: {
			// TODO как сослаться на самого себя?
			// Пришлось пока сделать ссылку reference: "grid"
			disabled: "{!grid.selection}"
		}
	}, {
		text: "Удалить",
		handler: "onDelete",
		bind: {
			// TODO как сослаться на самого себя?
			// Пришлось пока сделать ссылку reference: "grid"
			disabled: "{!grid.selection}"
		}
	}, "-", {
		text: "Обновить таблицу",
		handler: "onRefresh"
	}],
	
	
	
});