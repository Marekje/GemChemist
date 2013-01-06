var HTMLblocks = {
	label: function(forTarget, content) {
		var label = document.createElement('label');
			label.for = forTarget;
			label.appendChild(document.createTextNode(content));
		return label;
	},
	input: function(type, classname, name, placeholder, required, value) {
		var input = document.createElement('input');
			input.type = type;
			input.className = classname;
			input.name = name;
			input.placeholder = placeholder;
			input.required = required;
			if (value) {
				title.value = value;
			}
		return input
	},
	
	option: function(value, content) {
		var option = document.createElement('option');
			option.value = value;
			option.appendChild(content);
		return option;
	},
	list: function(listID, listClass) {
		var list = document.createElement('ul');
			list.id = listID;
			list.className = listClass;
		return list;
	},
	listItem: function(listItemClass) {
		var listItem = document.createElement('li');
			listItem.className = listItemClass;
		return listItem;
	},
	title: function(string, X) {
		var title = document.createElement('h'+X);
			title.innerHTML = string;
		return title;
	},
}