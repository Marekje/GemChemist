//Namespace : data
var data = {
	'items' : {
		'page' : 'Page of Jewelcrafting',
		'book' : 'Tome of JewelCrafting',
		'secrets' : 'Tome of Secrets',
	},
	
	'gems' : ['Ruby', 'Amethyst', 'Emerald', 'Topaz'],
	
	'recipes' : [
		/* Name, Number of previous gem, Gold, Books */
		['Chipped'],
		['Flawed', 2, 10, 0],
		['Normal', 2, 25, 0],
		['Flawless', 2, 40, 0],
		['Perfect', 2, 55, 1, 'page'],
		['Radiant', 2, 70, 1, 'page'],
		['Square', 2, 85, 1, 'book'],
		['Flawless Square', 2, 100, 1, 'book'],/* Highest drop level*/
		['Perfect Square', 3, 30000, 3, 'secrets'],
		['Radiant Square', 3, 50000, 6, 'secrets'],
		['Star', 3, 80000, 9, 'secrets'],
		['Flawless Square', 3, 100000, 12, 'secrets'],
		['Perfect Star', 3, 200000, 15, 'secrets'],
		['Radiant Star', 3, 400000, 20, 'secrets']
	]
}