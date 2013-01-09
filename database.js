//Namespace : data
var data = {
	'items' : {
		'page' : 	{ 'nameFR' : 'Page de Joaillerie',
					  'nameEN' : 'Page of Jewelcrafting' },
		'book' : 	{ 'nameFR' : 'Tome de Joaillerie',
					  'nameEN' : 'Tome of Jewelcrafting' },
		'secrets' : { 'nameFR' : 'Tome des Secrets',
					  'nameEN' : 'Tome of Secrets' },
		'gold' : 	{ 'nameFR' : 'Pièces d\'or',
					  'nameEN' : 'Gold pieces' }
	},
	
	'gems' : {
		'ruby' : 	 { 'nameFR' : 'Rubis',
					   'nameEN' : 'Ruby' },
		'amethyst' : { 'nameFR' : 'Améthyste',
					   'nameEN' : 'Amethyst' },
		'emerald' :  { 'nameFR' : 'Émeraude',
					   'nameEN' : 'Emerald' },
		'topaz' : 	 { 'nameFR' : 'Topaze',
					   'nameEN' : 'Topaz' },
	},
	
	'recipes' : {
		/* Name, Number of previous gem, Gold, Books */
		'chipped' : {
			'nameFR' : 'Abîmée',
			'nameEN' : 'Chipped',
			'numPrev' : 0,
			'goldCost' : 0,
			'pages' : 0,
			'books' : 0,
			'secrets' : 0 },
		'flawed' : {
			'nameFR' : 'Imparfaite',
			'nameEN' : 'Flawed',
			'numPrev' : 2,
			'goldCost' : 10,
			'pages' : 0,
			'books' : 0,
			'secrets' : 0 },
		'normal' : {
			'nameFR' : 'Normale',
			'nameEN' : 'Normal',
			'numPrev' : 2,
			'goldCost' : 25,
			'pages' : 0,
			'books' : 0,
			'secrets' : 0 },
		'flawless' : {
			'nameFR' : 'Sans défaut',
			'nameEN' : 'Flawless',
			'numPrev' : 2,
			'goldCost' : 40,
			'pages' : 0,
			'books' : 0,
			'secrets' : 0 },
		'perfect' : {
			'nameFR' : 'Parfaite',
			'nameEN' : 'Perfect',
			'numPrev' : 2,
			'goldCost' : 55,
			'pages' : 1,
			'books' : 0,
			'secrets' : 0 },
		'radiant' : {
			'nameFR' : 'Iridescente',
			'nameEN' : 'Radiant',
			'numPrev' : 2,
			'goldCost' : 70,
			'pages' : 1,
			'books' : 0,
			'secrets' : 0 },
		'square' : {
			'nameFR' : 'Carrée',
			'nameEN' : 'Square',
			'numPrev' : 2,
			'goldCost' : 85,
			'pages' : 0,
			'books' : 1,
			'secrets' : 0 },
		'flawlessSquare' : { /* Highest drop level*/
			'nameFR' : 'Carrée sans Défaut',
			'nameEN' : 'Flawless Square',
			'numPrev' : 2,
			'goldCost' : 100,
			'pages' : 0,
			'books' : 1,
			'secrets' : 0 },
		'perfectSquare' : { 
			'nameFR' : 'Carrée Parfaite',
			'nameEN' : 'Perfect Square',
			'numPrev' : 3,
			'goldCost' : 30000,
			'pages' : 0,
			'books' : 0,
			'secrets' : 3 },
		'radiantSquare' : { 
			'nameFR' : 'Carrée Iridescente',
			'nameEN' : 'Radiant Square',
			'numPrev' : 3,
			'goldCost' : 50000,
			'pages' : 0,
			'books' : 0,
			'secrets' : 6 },
		'star' : { 
			'nameFR' : 'Étoilée',
			'nameEN' : 'Star',
			'numPrev' : 3,
			'goldCost' : 80000,
			'pages' : 0,
			'books' : 0,
			'secrets' : 9 },
		'flawlessStar' : { 
			'nameFR' : 'Étoilée sans Défaut',
			'nameEN' : 'Flawless Star',
			'numPrev' : 3,
			'goldCost' : 100000,
			'pages' : 0,
			'books' : 0,
			'secrets' : 12 },
		'perfectStar' : { 
			'nameFR' : 'Étoilée Parfaite',
			'nameEN' : 'Perfect Star',
			'numPrev' : 3,
			'goldCost' : 200000,
			'pages' : 0,
			'books' : 0,
			'secrets' : 15 },
		'radiantStar' : { 
			'nameFR' : 'Étoilée Iridescente',
			'nameEN' : 'Radiant Star',
			'numPrev' : 3,
			'goldCost' : 400000,
			'pages' : 0,
			'books' : 0,
			'secrets' : 20 },
	},
	
	'taxes' : { 'AHTax' : 15 },
	'translations' : { 
		'subtitle' : {'nameFR' : 'Un outil pour mieux vendre ses gemmes dans Diablo III',
					  'nameEN' : 'A Diablo III tool for Auction House Jewelers' },
		'cost'  :  { 'nameFR' : 'Coût',
				    'nameEN' : 'Cost' },
		'benef' : { 'nameFR' : 'Bénéfices',
					'nameEN' : 'Benefits' },
		'from'  : { 'nameFR' : 'Depuis',
					'nameEN' : 'from' },
		'to'	: { 'nameFR' : 'vers',
					'nameEN' : 'to'}
	}
}








