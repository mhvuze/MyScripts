// ==UserScript==
// @name         RDB Direct PDF Link in Results
// @namespace
// @version      0.1
// @description
// @author       Cornelius W.
// @match        https://rdb.manz.at/suchen*
// @grant        none
// ==/UserScript==

function CreatePDFLink() {
	try {
        var results = document.getElementById("search-results").getElementsByTagName("li");
        //console.log(results);
        for (var i = 0; i < results.length; i++) {
            var id = results[i].attributes["id"].textContent;
            var pdfLink = "https://rdb.manz.at/document/" + id + "/formats/" + id + ".pdf";
            var href = results[i].getElementsByTagName("a")[0];
            href.attributes["href"].textContent = pdfLink;
        }
	}
	catch(err) {
		console.log("Error occured.");
	}
}

CreatePDFLink();
