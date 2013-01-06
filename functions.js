var gemC = {

	/* Start the webapp stuff */
	fillGemLists: function() {
		var startList = document.getElementById('startgemlevel');
		var endList	  = document.getElementById('endgemlevel');
		
		gemC.fillGemList(startList);
		gemC.fillGemList(endList);
		/*Comment faire pour que endList soit composée uniquement des gemmes égales ou supérieures à startList ? addEventListener !!*/
		
	},
	
	fillGemList: function(container) {
		for (var key in data.recipes) {
		
			var optContent = document.createTextNode(data.recipes[key].name);
			var newOption = HTMLblocks.option(key, optContent);
			
			if ( container.id === 'startgemlevel' && key === 'flawlessSquare')  { newOption.selected = true; }
			if ( container.id === 'endgemlevel' && key === 'perfectSquare') 	{ newOption.selected = true; }
			
			container.appendChild(newOption);
		}
	},

	createRecipe: function() {
		var startGem = document.getElementById('startgemlevel');
		var endGem = document.getElementById('endgemlevel');
		
		startGem.addEventListener('change', function(e) { gemC.gemsDetect(); }, false);
		endGem.addEventListener('change', function(e) { gemC.gemsDetect(); }, false);
	},
	
	calcRecipe: function(startGem, endGem, recipe) {
		var gems = [];
		for (var key in data.recipes) { gems.push(key) }
		
		var nextEndGem = gems[gems.indexOf(endGem)-1];
		
		if (gems.indexOf(startGem) === gems.indexOf(endGem)) {
			recipe.gemName = startGem;
			return recipe
		} else {
			/* REVOIR LES FORMULES */
			recipe.gemName  = startGem;
			recipe.gemNum	= recipe.gemNum*data.recipes[endGem].numPrev;
			recipe.goldCost += recipe.gemNum*data.recipes[endGem].goldCost;
			recipe.pages	+= recipe.gemNum*data.recipes[endGem].pages;
			recipe.books	+= recipe.gemNum*data.recipes[endGem].books;
			recipe.secrets  += recipe.gemNum*data.recipes[endGem].secrets;
			return gemC.calcRecipe(startGem, nextEndGem, recipe);
		}
		
	},
	GemRecipe: function() {
		this.gemName  = '',
		this.gemNum	  = 1,
		this.goldCost = 0,
		this.pages	  = 0,
		this.books	  = 0,
		this.secrets  = 0,
		
		this.toHTML = function() {
			var list = HTMLblocks.list('gemRecipe', 'recipe');
				
				var gemItem = HTMLblocks.listItem('');
					gemItem.appendChild(gemC.AHinputHTML(this.gemNum, data.recipes[this.gemName].name, this.gemName));
				
				var pageItem = HTMLblocks.listItem('');
					pageItem.appendChild(gemC.AHinputHTML(this.pages, data.items.page.name, 'pages'));
					
				var bookItem = HTMLblocks.listItem('');
					bookItem.appendChild(gemC.AHinputHTML(this.books, data.items.book.name, 'books'));
					
				var secretsItem = HTMLblocks.listItem('');
					secretsItem.appendChild(gemC.AHinputHTML(this.secrets, data.items.secrets.name, 'secrets'));
				
				var golds = this.goldCost;
				var goldItem = HTMLblocks.listItem(''); /* How much flouze ? */
					goldItem.appendChild(gemC.goldHTML(golds));
				
				var costItem = HTMLblocks.listItem('');
					costItem.appendChild(gemC.costHTML());
				
				list.appendChild(gemItem);
				list.appendChild(pageItem);
				list.appendChild(bookItem);
				list.appendChild(secretsItem);
				list.appendChild(goldItem);
				list.appendChild(costItem);
				
			return list;
		}
	},
	/* Specific HTML blocks */
	AHinputHTML: function(numObj, nameObj, classNameObj) {
		var AHinputContent = document.createElement('p');
			var numberOfObjects = document.createElement('span');
				numberOfObjects.className = 'objectnumber';
				numberOfObjects.innerText = numObj + ' ';
				
			var nameOfTheObject = document.createTextNode(nameObj);
				
			var nameOfObject = document.createElement('label');
				nameOfObject.className = classNameObj;
				
			var input = HTMLblocks.input('text', 'costnumber', 'costnumber', 'AH price', false);
			
			AHinputContent.appendChild(nameOfObject);
				nameOfObject.appendChild(numberOfObjects);
				nameOfObject.appendChild(nameOfTheObject);
			AHinputContent.appendChild(input);
		return AHinputContent;
	},
	goldHTML: function(golds) {
		var goldContent = document.createElement('p');
			var goldResult = document.createElement('span');
				goldResult.className = 'goldresult costnumber';
				goldResult.innerText = golds;
			var goldLabel = document.createTextNode(' Gold pieces');
			
			goldContent.appendChild(goldResult);
			goldContent.appendChild(goldLabel);
		return goldContent;
	},
	costHTML: function() {
		var costContent = document.createElement('p');
			var costTitle = document.createElement('h1');
				var costTitleContent = document.createTextNode('Cost : ');
			var costSpan = document.createElement('span');
				costSpan.id = 'costresult';
				
			costContent.appendChild(costTitle);
				costTitle.appendChild(costTitleContent);
			costContent.appendChild(costSpan);
		return costContent;
	},
	
	/* Helpful functions */
	removeElement: function(node) {
		node.parentNode.removeChild(node);
	},
	
	/* AddEventListeners */
	calcCost: function() {
		var costCalcul = [];
		var costResult;
		
		var costNumbers = document.getElementsByClassName('costnumber');
		for (i=0; i<costNumbers.length; i++) {
		
			costNumbers[i].id = i;
			costCalcul.push(0);
			
			costNumbers[i].addEventListener('keyup', function(e) {
				costCalcul[this.id] = this.value;
				console.log(costCalcul);
				
				for (j=0; j<costCalcul.length; j++) {
					costResult += costCalcul[j];
				}
				
			}, false)
		}
		console.log(costCalcul);
		
		var costContainer = document.getElementById('costresult');
		costContainer.innerHTML = costResult;
	},
	
	calcBenef: function() {
		var sellPrice = document.getElementById('sellingpriceinput');
		var benefNum = document.getElementById('benefitsnumber');
		var benefPer = document.getElementById('benefitspercent');
		
		sellPrice.addEventListener('keyup', function(e) {
			price = sellPrice.value;
			benefNum.innerHTML = price - (price/100*data.taxes.AHTax);
			/*ADD BENEF PERCENTAGE IF THERE IS A COST SOMEWHERE*/
		}, false)
	},
	
	gemsDetect: function() {
		var container = document.getElementById('recipesection');
		var startGem = document.getElementById('startgemlevel').value;
		var endGem = document.getElementById('endgemlevel').value;
		container.innerHTML = '';
		var recipe = new gemC.GemRecipe();
		gemC.calcRecipe(startGem, endGem, recipe);
		container.appendChild(recipe.toHTML());
		gemC.calcCost();
	}
}