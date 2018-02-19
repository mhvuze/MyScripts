// ==UserScript==
// @name         MH:World Skill Sim Sort
// @namespace
// @version      0.1
// @description  Sort skills alphabetically
// @author       MHVuze
// @match        http://mhw.wiki-db.com/sim/?hl=en
// @grant        none
// @downloadURL  
// ==/UserScript==

// Sort skill list container alphabetically
function SortSkillListContainer() {
	// Sort array alphabetically
	array = [];
	skillitems = document.getElementsByClassName("skillitem");
	for (var i = 0; i < skillitems.length; i++) {
		obj = { name: skillitems[i].childNodes[0].textContent, code: skillitems[i] };
		array.push(obj);
	}
	
	array.sort(function (a, b) {
		if (a.name < b.name) return -1;
		if (a.name > b.name) return 1;
		return 0;
	});
	
	// Secure functionality
	div_buttons = document.getElementById("searchbutton").parentNode;
	div_results = document.getElementById("results");
	
	// Re-create container
	var skilllistcontainer = document.createElement("div");
	with(skilllistcontainer) { setAttribute("class", "skilllistcontainer"); }
	var skillgenre = document.createElement("div");
	with(skillgenre) { setAttribute("class", "skillgenre"); innerHTML = "Alphabetically sorted"; }
	skilllistcontainer.appendChild(skillgenre);
	
	for (var i = 0; i < array.length; i++) {
		skilllistcontainer.appendChild(array[i].code);
	}
	
	skilllistcontainer.appendChild(div_buttons);
	skilllistcontainer.appendChild(div_results);
	
	document.getElementById("searchpane").replaceChild(skilllistcontainer, document.getElementById("skilllistcontainer"));
}

SortSkillListContainer();
