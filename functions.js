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
		
			var optContent = document.createTextNode(data.recipes[key].nameFR);
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
			recipe.goldCost += recipe.gemNum*data.recipes[endGem].goldCost;
			recipe.pages	+= recipe.gemNum*data.recipes[endGem].pages;
			recipe.books	+= recipe.gemNum*data.recipes[endGem].books;
			recipe.secrets  += recipe.gemNum*data.recipes[endGem].secrets;
			recipe.gemNum	= recipe.gemNum*data.recipes[endGem].numPrev;
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
					gemItem.appendChild(gemC.AHinputHTML(this.gemNum, ' * gemme ' + data.recipes[this.gemName].nameFR, this.gemName));
				list.appendChild(gemItem);
				
				if (this.pages !== 0 ) {
					var pageItem = HTMLblocks.listItem('');
						pageItem.appendChild(gemC.AHinputHTML(this.pages, ' * ' + data.items.page.nameFR, 'pages'));
					list.appendChild(pageItem);
				}
				
				if (this.books !== 0 ) {
					var bookItem = HTMLblocks.listItem('');
						bookItem.appendChild(gemC.AHinputHTML(this.books, ' * ' + data.items.book.nameFR, 'books'));
					list.appendChild(bookItem);
				}
				
				if (this.secrets !== 0) {		
					var secretsItem = HTMLblocks.listItem('');
						secretsItem.appendChild(gemC.AHinputHTML(this.secrets, ' * ' + data.items.secrets.nameFR, 'secrets'));
					list.appendChild(secretsItem);
				}
				
				var goldItem = HTMLblocks.listItem(''); /* How much flouze ? */
					goldItem.appendChild(gemC.goldHTML(this.goldCost));
				
				var costItem = HTMLblocks.listItem('');
					costItem.appendChild(gemC.costHTML());
				
				list.appendChild(goldItem);
				list.appendChild(costItem);
				
			return list;
		}
	},
	/* Specific HTML blocks */
	AHinputHTML: function(numObj, nameObj, classNameObj) {
		var AHinputContent = document.createElement('p');
			AHinputContent.className = 'itembox'
			var numberOfObjects = document.createElement('span');
				numberOfObjects.className = 'objectnumber';
				numberOfObjects.innerText = numObj + ' ';
				
			var nameOfTheObject = document.createTextNode(nameObj + ' :');
				
			var nameOfObject = document.createElement('label');
				nameOfObject.className = classNameObj;
				
			var input = HTMLblocks.input('text', 'costnumber', 'costnumber', 'Prix unitaire', false);
			
			AHinputContent.appendChild(nameOfObject);
				nameOfObject.appendChild(numberOfObjects);
				nameOfObject.appendChild(nameOfTheObject);
			AHinputContent.appendChild(input);
		return AHinputContent;
	},
	goldHTML: function(golds) {
		var goldContent = document.createElement('p');
			goldContent.id = 'goldcontent';
			goldContent.className = 'itembox';
			var goldResult = document.createElement('span');
				goldResult.className = 'goldresult';
				goldResult.id = 'goldresult';
				goldResult.innerText = golds.toFixed(0) + ' ' + data.items.gold.nameFR;
			
			goldContent.appendChild(goldResult);
		return goldContent;
	},
	costHTML: function() {
		var costContent = document.createElement('p');
			costContent.className = 'resultscontent';
			var costTitle = document.createElement('h1');
				costTitle.className = 'resultstitle'
				var costTitleContent = document.createTextNode(data.translations.cost.nameFR + ' : ');
			var costSpan = document.createElement('span');
				costSpan.id = 'costresult';
				costSpan.className = 'answer';
				
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
		var costResult = 0;
		
		var costNumbers = document.getElementsByClassName('costnumber');
		var goldNumber = parseInt(document.getElementById('goldresult').innerHTML);
		var costContainer = document.getElementById('costresult');
		
		for (i=0; i<costNumbers.length; i++) {
		
			costNumbers[i].id = i;
			costCalcul.push(0);
			
			costNumbers[i].addEventListener('keyup', function(e) {
				var number = this.parentNode.querySelector('.objectnumber').innerHTML;
				if (this.value === '') { costCalcul[this.id] = 0 }
				else { costCalcul[this.id] = parseInt(this.value)*number }
								
				costResult = 0;
				for (j=0; j<costCalcul.length; j++) { costResult += parseInt(costCalcul[j]); }
				costContainer.innerHTML = costResult.toFixed(0) + ' ' + data.items.gold.nameFR;
				
			}, false)
		}
		
		costCalcul.push(goldNumber);
		console.log(costCalcul);
		for (i=0; i<costCalcul.length; i++) {
			costResult += costCalcul[i]
		}
		costContainer.innerHTML = costResult + ' ' + data.items.gold.nameFR;
	},
	calcBenef: function() {
		var sellingPrice = document.getElementById('sellingpriceinput');
		var costNum = document.getElementById('costresult');
		
		var benefNum = document.getElementById('benefitsnumber');
		var benefPer = document.getElementById('benefitspercent');
		
		//var sellResult, costResult;
		
		sellingPrice.addEventListener('keyup', gemC.calcBenefEvent, false);
		
		var costNumbers = document.getElementsByClassName('costnumber');
		for (i=0; i<costNumbers.length; i++) {
			costNumbers[i].addEventListener('keyup', gemC.calcBenefEvent, false);
			console.log('Bla');
		}
	},
	calcBenefEvent: function() {
		var sellingPrice = document.getElementById('sellingpriceinput');
		var costNum = document.getElementById('costresult');
		var benefNum = document.getElementById('benefitsnumber');
		var benefPer = document.getElementById('benefitspercent');
		var sellResult, costResult;
	
		if (!isNaN(parseInt(sellingPrice.value))) { sellResult = parseInt(sellingPrice.value); }
		else { sellResult = 0; }
		
		if (!isNaN(parseInt(costNum.innerHTML))) { costResult = parseInt(costNum.innerHTML) }
		else { costResult = 0; }
		
		var benefResult = ((sellResult - (sellResult/100*data.taxes.AHTax)) - costResult ).toFixed(0) + ' ' + data.items.gold.nameFR;
		benefNum.innerHTML = benefResult;	
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