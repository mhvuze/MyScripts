// ==UserScript==
// @name         RidaOnline Popup Workaround
// @namespace
// @version      1.1
// @description  Modifies the "Rida PDF" button to work with pop-ups blocked (especially useful for Safari).
// @author       Cornelius W.
// @include      http://www.ridaonline.at/*
// @include      http://193.33.115.179/*
// @grant        none
// ==/UserScript==

function CreatePDFLink() {
	try {
		pdfId = document.getElementById("RIONVOLL.V.R5.RIDANR").attributes["value"].textContent;
		pdfUrl = "http://www.ridaonline.at/RidaOnline/RIONPdf.a5w?PDFNr=" + pdfId + "&UserNr=##&PCNum=########&FundLink=";		// Modify UserNr / PCNum if necessary
		document.getElementById("ButtPDF").attributes["onclick"].textContent = "window.open('" + pdfUrl + "','_blank')";
	}
	catch(err) {
		console.log("No pdfId found.");
	}
}

setInterval(function () { CreatePDFLink(); }, 5000);
