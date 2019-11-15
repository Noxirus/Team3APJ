/*
	Package loader Script
	Purpose: determine the package selected by the user and dyanimically
	update the packages html page on load to have the info, details and 
	image for that specific package. Packages are store in external JSON
	files that can be used to populate the page.
*/

/* pulls the package from the URL */
function getImageDirectoryByFullURL(url){
    url = url.split('#');
    url = url.pop();      
    return url;           
}

/* grabs the associated json file for the package and produces an object for it*/
function getDetails() {
var packageName = getImageDirectoryByFullURL(window.location.href)
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
	  console.log(this.responseText)
    var pageDetails =JSON.parse(this.responseText);
	setupPage(pageDetails);
  }
};
xmlhttp.open("GET", ("/pkgs/" +packageName+ ".json"), true);
xmlhttp.send(); 

}

/* populates the page using the object created by getDetails */
function setupPage (pageDetails) {
	document.getElementById("featureTitle").innerHTML 	= pageDetails.title
	document.getElementById("featureBlurb").innerHTML 	= pageDetails.blurb
	document.getElementById("featureDetails").innerHTML = pageDetails.details
	document.getElementById("featureIMG").src = pageDetails.imgURL
}

/* runs script on page load with JQuery */
$( document ).ready( getDetails );