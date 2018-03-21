// ==UserScript==
// @name         RidaOnline Popup Workaround
// @namespace
// @version      1.0
// @description  Modifies the "Rida PDF" button to work with pop-ups blocked (especially useful for Safari).
// @author       Cornelius W.
// @match        http://www.ridaonline.at/*
// @grant        none
// ==/UserScript==

function CreatePDFLink() {
	try {
		pdfId = document.getElementById("RIONVOLL.V.R1.RIDANR").attributes["value"].textContent;
		pdfUrl = "http://www.ridaonline.at/RIONPdf.a5w?PDFNr=" + pdfId + "&UserNr=63&PCNum=77777777&FundLink=";		// Modify UserNr / PCNum if necessary
		document.getElementById("ButtPDF").attributes["onclick"].textContent = "window.open('" + pdfUrl + "','_blank')";
	}
	catch(err) {
		console.log("No pdfId found.");
	}
}

setInterval(function () { CreatePDFLink(); }, 5000);
